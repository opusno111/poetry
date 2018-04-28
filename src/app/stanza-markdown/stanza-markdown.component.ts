import { StanzaMarkdownService } from './stanza-markdown.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stanza-markdown',
  templateUrl: './stanza-markdown.component.html',
  styleUrls: ['./stanza-markdown.component.css']
})
export class StanzaMarkdownComponent implements OnInit {

  @Input() stanza: string;
  @Input() buttonName: string;

  constructor(private _stanzaMarkdownService: StanzaMarkdownService) { }

  ngOnInit() { }

  broadcastTextData() {
    this._stanzaMarkdownService.broadcastStanza(this.stanza);
  }

}
