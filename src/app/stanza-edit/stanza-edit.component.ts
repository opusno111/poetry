import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';

import { IStanza } from './../shared/models/stanza';
import { Block } from './../shared/models/block';

import { PoemEditService } from './../poem-edit/poem-edit.service';
import { PoemService } from './../shared/services/poem.service';
import { StanzaService } from './../shared/services/stanza.service';
import { StanzaEditService } from './stanza-edit.service';

@Component({
  selector: 'stanza-edit',
  templateUrl: './stanza-edit.component.html',
  styleUrls: ['./stanza-edit.component.css'],
  providers: [DragulaService]
})
export class StanzaEditComponent implements OnInit, OnDestroy {

  stanza$: Observable<IStanza>;

  @Input() stanza: IStanza;
  lines: string[];
  blocks: Block[] = new Array();

  stanzaForm: FormGroup;
  bagStanza: string;

  constructor(private _poemEditService: PoemEditService,
              private _stanzaEditService: StanzaEditService,
              private _poemService: PoemService,
              private _stanzaService: StanzaService,
              private _dragula: DragulaService,
              private _formBuilder: FormBuilder) { 
  }

  ngOnDestroy(): void {
    console.log('this.bagStanza: ', this.bagStanza);
    if (this.bagStanza) {
      let findBag = this._dragula.find(this.bagStanza);
      this._dragula.destroy(this.bagStanza);
      console.log('findBag: ', findBag);
    };
  }

  ngOnInit() {
      this.bagStanza = `bag-stanza${this.stanza.stanzaId}`;
      this._dragula.setOptions(this.bagStanza, {
          removeOnSpill: true,
          moves: function (el, container, handle) {
            return handle.className === 'handle';
        },
      });

    this.convertStanzaToBlocks();
    this.initForm();
  }

  initForm() {
    this.stanzaForm = this._formBuilder.group({
      lines: new FormArray([])
    });

    this.lines.forEach(element => {
      let formCtrl = new FormControl(element);
      (<FormArray>this.stanzaForm.get('lines')).push(formCtrl);
    });
  }

  addLineToForm() {
    const control = new FormControl();
    (<FormArray>this.stanzaForm.get('lines')).push(control);
  }

  convertStanzaToBlocks() {
    this.blocks = [];

    this.lines = this.stanza.lines.split(/\r?\n/);

    if (this.lines[this.lines.length - 1] == "" ) {
      this.lines.pop();
    }

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
    this.stanza.lines = '';

    this.blocks.forEach(element => {
      this.lines.push(element.value);
    });

    this.lines.forEach(element => {
      this.stanza.lines = this.stanza.lines + element + '\r\n';
    });

    console.log('stanza lines: ', this.stanza.lines);

    this.saveStanza();

    console.log(this.lines);
    console.log(this.blocks);
  }

  saveStanza() {
    // let sources = [this._stanzaService.updateStanza(this.stanza), this._poemService.getPoem(this.stanza.poemId)];

    // Observable.forkJoin(this._stanzaService.updateStanza(this.stanza), this._poemService.getPoem(this.stanza.poemId)).subscribe(data => {
    //   console.log('data[0]: ', data[0]);
    //   console.log('data[1]: ', data[1]);
    //   this._poemEditService.selectedPoem(data[1]);
    // },
    //   error => {
    //   console.log(`saveEditedStanza failed: ${error}`);
    // });
    this._stanzaService.updateStanza(this.stanza).subscribe(poem => {
      this._poemEditService.selectedPoem(poem);
    },
      error => {
      console.log(`saveEditedStanza failed: ${error}`);
    });
  }

  processBodyFromForm() {
    this.lines = new Array();
    this.stanza.lines = '';

    for (let index = 0; index < (<FormArray>this.stanzaForm.get('lines')).length; index++) {
      let element = (<FormArray>this.stanzaForm.get('lines')).at(index).value;
      this.lines.push(element);
    }

    this.lines.forEach(element => {
      this.stanza.lines = this.stanza.lines + element + '\r\n';
    });

    console.log('poem body: ', this.stanza.lines);

    this.saveStanza();
  }

}
