import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemMarkdownComponent } from './poem-markdown.component';

describe('PoemMarkdownComponent', () => {
  let component: PoemMarkdownComponent;
  let fixture: ComponentFixture<PoemMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
