import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanzaEditComponent } from './stanza-edit.component';

describe('StanzaEditComponent', () => {
  let component: StanzaEditComponent;
  let fixture: ComponentFixture<StanzaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanzaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanzaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
