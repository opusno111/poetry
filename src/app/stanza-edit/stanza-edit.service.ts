import { Observable } from 'rxjs/Observable';
import { Stanza } from './../shared/models/stanza';
import { BehaviorSubject } from 'rxjs/rx';
import { Injectable } from '@angular/core';

@Injectable()
export class StanzaEditService {

  private selectedStanzaSubject: BehaviorSubject<Stanza> = new BehaviorSubject<Stanza>(new Stanza());
  public selectedStanza$: Observable<Stanza> = this.selectedStanzaSubject.asObservable();

  constructor() { }

  selectedPoem(stanza: Stanza): void {
    this.selectedStanzaSubject.next(stanza);
  }

}
