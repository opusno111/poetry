import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPoem } from './../models/poem';

const API_URL = `http://localhost:57350/api/Poems`;

@Injectable()
export class PoemService {

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  getPoems(): Observable<IPoem[]> {
      return this._http.get(`${API_URL}`, this.options)
            .map((resp: Response) => <IPoem[]>resp.json())
            .catch(this.handleError);
   }

  getPoem(id: number): Observable<IPoem> {
      return this._http.get(`${API_URL}/${id}`, this.options)
            .map((resp: Response) => <IPoem>resp.json())
            .catch(this.handleError);
   }

  updatePoem(poem: IPoem): Observable<IPoem> {
      return this._http.put(`${API_URL}/${poem.poemId}`, poem, this.options)
            .map((resp: Response) => <IPoem>resp.json())
            .catch(this.handleError);
   }

  createPoem(poem: IPoem): Observable<IPoem> {
      return this._http.post(`${API_URL}`, poem, this.options)
            .map((resp: Response) => <IPoem>resp.json())
            .catch(this.handleError);
   }

    private handleError(error: any): Observable<any> {
        console.error(error);
        return Observable.throw(error.json || 'Server Error');
    }
}
