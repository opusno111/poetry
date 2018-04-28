import { Component, OnInit } from '@angular/core';

import { PoemService } from './../shared/services/poem.service';
import { IPoem } from './../shared/models/poem';

@Component({
  selector: 'poetry-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Poetry Home';
  poems: IPoem[];

  constructor(private _poemService: PoemService) { }

  ngOnInit() {
    this._poemService.getPoems().subscribe(poems => {
      this.poems = poems;
    });
  }

}
