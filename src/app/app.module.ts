// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Response, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MarkdownModule } from 'angular2-markdown';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PoemEditComponent } from './poem-edit/poem-edit.component';
import { PoemMarkdownComponent } from './poem-markdown/poem-markdown.component';
import { StanzaEditComponent } from './stanza-edit/stanza-edit.component';
import { StanzaMarkdownComponent } from './stanza-markdown/stanza-markdown.component';

import { PoemService } from './shared/services/poem.service';
import { PoemMarkdownService } from './poem-markdown/poem-markdown.service';
import { PoemEditService } from './poem-edit/poem-edit.service';
import { StanzaService } from './shared/services/stanza.service';
import { StanzaEditService } from './stanza-edit/stanza-edit.service';
import { StanzaMarkdownService } from './stanza-markdown/stanza-markdown.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoemEditComponent,
    PoemMarkdownComponent,
    StanzaEditComponent,
    StanzaMarkdownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DragulaModule,
    AngularFontAwesomeModule,
    MarkdownModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [
    PoemService,
    PoemEditService,
    PoemMarkdownService,
    StanzaService,
    StanzaEditService,
    StanzaMarkdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
