import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/rx';

@Injectable()
export class PoemMarkdownService {

  private poemBodySubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public poemBody$: Observable<string> = this.poemBodySubject.asObservable();

  constructor() { }

  broadcastTextData(textData: string) {
    this.poemBodySubject.next(textData);
  }
}
