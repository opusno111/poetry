import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPoem } from './../models/poem';
import { IStanza } from './../models/stanza';

import { PoemService } from './poem.service';

const API_URL = `http://localhost:57350/api/Stanzas`;

@Injectable()
export class StanzaService {

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http,
            private _poemService: PoemService) { }

  getStanzas(): Observable<IStanza[]> {
      return this._http.get(`${API_URL}`, this.options)
            .map((resp: Response) => <IStanza[]>resp.json())
            .catch(this.handleError);
   }

  getStanza(id: number): Observable<IStanza> {
      return this._http.get(`${API_URL}/${id}`, this.options)
            .map((resp: Response) => <IStanza>resp.json())
            .catch(this.handleError);
   }

  updateStanza(stanza: IStanza): Observable<IPoem> {
      return this._http.put(`${API_URL}/${stanza.stanzaId}`, stanza, this.options)
            .map((resp: Response) => <IPoem>resp.json())
            .catch(this.handleError);
   }

//    updateStanzaGetPoem(stanza: IStanza) {
//         let sources = [this.updateStanza(stanza), this._poemService.getPoem(stanza.poemId)];
//         return Observable.forkJoin(this.updateStanza(stanza), this._poemService.getPoem(stanza.poemId));
//    }

  createStanza(stanza: IStanza): Observable<IStanza> {
      return this._http.post(`${API_URL}`, stanza, this.options)
            .map((resp: Response) => <IStanza>resp.json())
            .catch(this.handleError);
   }

    private handleError(error: any): Observable<any> {
        console.error(error);
        return Observable.throw(error.json || 'Server Error');
    }

}
