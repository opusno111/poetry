import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/rx';

import { Poem } from './../shared/models/poem';

@Injectable()
export class PoemEditService {

  private selectedPoemSubject: BehaviorSubject<Poem> = new BehaviorSubject<Poem>(new Poem());
  public selectedPoem$: Observable<Poem> = this.selectedPoemSubject.asObservable();

  constructor() { }

  selectedPoem(poem: Poem): void {
    this.selectedPoemSubject.next(poem);
    this.selectedPoem$.publishLast().refCount();
  }

}
