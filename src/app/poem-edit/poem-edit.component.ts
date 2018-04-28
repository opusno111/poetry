import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { DragulaService } from "ng2-dragula";

import { IPoem, Poem } from './../shared/models/poem';
import { Block } from './../shared/models/block';
import { Stanza, IStanza } from './../shared/models/stanza';

import { PoemService } from './../shared/services/poem.service';
import { PoemEditService } from './poem-edit.service';
import { PoemMarkdownService } from './../poem-markdown/poem-markdown.service';
import { StanzaService } from './../shared/services/stanza.service';

@Component({
  selector: 'poem-edit',
  templateUrl: './poem-edit.component.html',
  styleUrls: ['./poem-edit.component.css']
})
export class PoemEditComponent implements OnInit {

  poem: IPoem = new Poem();
  selectedPoem: IPoem;
  lines: string[];
  blocks: Block[] = new Array();
  stanzas: IStanza[];

  selectedPoem$: Observable<Poem>;
  poemBody$: Observable<string>;

  poemForm: FormGroup;

  constructor(private _poemService: PoemService,
              private _stanzaService: StanzaService,
              private _poemEditService: PoemEditService,
              private _poemMarkdownService: PoemMarkdownService,
              private _dragula: DragulaService,
              private _formBuilder: FormBuilder) {
    this._dragula.setOptions('bag-one', {
      removeOnSpill: true,
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      },
    });
  }

  ngOnInit() {    

    this.poemBody$ = this._poemMarkdownService.poemBody$;

    this.poemBody$.subscribe(body => {
      this.poem.body = body;
      this.createStanzasFromBody();
      this.savePoem();
    },
      error => {
        console.log(`subscribe to _poemMarkdownService.poemBody$ within poem-edit.comp failed, ${error}`);
    });

    this.selectedPoem$ = this._poemEditService.selectedPoem$;
    
    this._poemService.getPoem(1).subscribe(p => {
      this.poem = p;
      this.stanzas = p.stanzas;
      this._poemEditService.selectedPoem(this.poem);
      this.createBodyFromStanzas();
      this.convertBodyToBlocks();
      this.initForm();
        },
      error => {
        console.log(`onInit getPoem failed: ${error}`);
      });

    this.selectedPoem$.subscribe(p => {
      this.poem = p
      this.createBodyFromStanzas();
      this.initForm();
    });
  }

  initForm() {
    this.poemForm = this._formBuilder.group({
      stanzas: new FormArray([])
    });

    this.stanzas.forEach(element => {
      let formCtrl = new FormControl(element);
      (<FormArray>this.poemForm.get('stanzas')).push(formCtrl);
      (<FormArray>this.poemForm.get('stanzas')).value;
    });
  }

  addStanzaToForm() {
    const control = new FormControl();
    (<FormArray>this.poemForm.get('stanzas')).push(control);
  }

  savePoem() {
    this._poemService.updatePoem(this.poem).subscribe(p => {
      this.poem = p;
      this._poemEditService.selectedPoem(this.poem);
      this.createBodyFromStanzas();
        },
      error => {
        console.log(`saveEditedPoem failed: ${error}`);
      });
  }

  createStanzasFromBody() {
    let stanzas = this.poem.body.split(/\r\n/);
    console.log('stanzas from body: ', stanzas);
  }

  createBodyFromStanzas() {
    this.poem.body = '';

    this.poem.stanzas.sort((sOne, sTwo) => {
      if(sOne.orderInPoem > sTwo.orderInPoem) return 1;
      if(sOne.orderInPoem > sTwo.orderInPoem) return -1;
      return 0;
    })

    this.poem.stanzas.forEach(element => {
      let lines = element.lines.split(/\r?\n/);

      if (lines[lines.length - 1] == "") lines.pop();

      lines.forEach(element => {
          this.poem.body = this.poem.body + '    ' + element + '\r\n';
      });

      this.poem.body = this.poem.body + '\r\n';

    });
    console.log('this.poem.body: ', this.poem.body);
  }

  convertBodyToBlocks() {
    this.blocks = [];
    // this.lines = this.poem.body.split(/\r?\n|\s{2,}/);
    // this.lines = this.poem.body.split(/\r?\n|\s{2,}/);
    this.lines = this.poem.body.split(/\r?\n/);

    this.lines.forEach(element => {
      let newBlock = new Block();
      newBlock.type = "text";
      if (element.length === 0) newBlock.value = '  ';
      newBlock.value = element;
      this.blocks.push(newBlock);
    });
    console.log(this.lines);
    console.log(this.blocks);
  }

  processBody() {
    this.lines = new Array();
    this.poem.body = '';

    this.blocks.forEach(element => {
      this.lines.push(element.value);
    });

    this.lines.forEach(element => {
      this.poem.body = this.poem.body + element + '\r\n';
    });

    console.log('poem body: ', this.poem.body);

    this.savePoem();

    console.log(this.lines);
    console.log(this.blocks);
  }

  processBodyFromForm() {
    this.processBodyFromDragula();
    this.lines = new Array();
    this.poem.body = '';

    for (let index = 0; index < (<FormArray>this.poemForm.get('stanzas')).length; index++) {
      let element = (<FormArray>this.poemForm.get('stanzas')).at(index).value;
      this.lines.push(element);
    }

    this.lines.forEach(element => {
      this.poem.body = this.poem.body + element + '\r\n';
    });

    console.log('poem body: ', this.poem.body);

    this.savePoem();

    console.log(this.lines);
    console.log(this.blocks);
  }

  processBodyFromDragula() {
    this.lines = new Array();
    this.poem.body = '';

    let drake = this._dragula.find('bag-one').drake.models[0];
    this.poem.stanzas = drake;
    console.log('drake', drake);

    for (let index = 0; index < drake.length; index++) {
      let element = drake[index].lines;
      drake[index].orderInPoem = index + 1;
      console.log('element: ', element);
      this.lines.push(element);
    }

    this.lines.forEach(element => {
      this.poem.body = this.poem.body + element + '\r\n';
    });

    console.log('poem body: ', this.poem.body);

    this.savePoem();

    console.log(this.lines);
    console.log(this.blocks);
  }

  addNewStanza() {
    let newStanza = new Stanza();
    newStanza.lines = "";
    newStanza.poemId = this.poem.poemId;
    newStanza.orderInPoem = this.poem.stanzas.length + 1;
    newStanza.stanzaId = 0;
    this.poem.stanzas.push(newStanza);
  }
}
