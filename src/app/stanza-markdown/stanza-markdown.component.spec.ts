import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanzaMarkdownComponent } from './stanza-markdown.component';

describe('StanzaMarkdownComponent', () => {
  let component: StanzaMarkdownComponent;
  let fixture: ComponentFixture<StanzaMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanzaMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanzaMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
