import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/rx';
import { Injectable } from '@angular/core';

@Injectable()
export class StanzaMarkdownService {

  private stanzaSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public stanzaBody$: Observable<string> = this.stanzaSubject.asObservable();

  constructor() { }

  broadcastStanza(stanza: string) {
    this.stanzaSubject.next(stanza);
  }

}
