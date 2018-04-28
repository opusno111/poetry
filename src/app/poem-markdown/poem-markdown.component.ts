import { PoemMarkdownService } from './poem-markdown.service';
import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/rx';
import { Observable } from 'rxjs/Observable';

import { Poem } from './../shared/models/poem';

@Component({
  selector: 'poem-markdown',
  templateUrl: './poem-markdown.component.html',
  styleUrls: ['./poem-markdown.component.css']
})
export class PoemMarkdownComponent implements OnInit {

  @Input() textData: string;
  @Input() buttonName: string;

  constructor(private _poemMarkdownService: PoemMarkdownService) { }

  ngOnInit() { }

  broadcastTextData() {
    this._poemMarkdownService.broadcastTextData(this.textData);
  }

}
