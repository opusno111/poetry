import { TestBed, inject } from '@angular/core/testing';

import { StanzaEditService } from './stanza-edit.service';

describe('StanzaEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StanzaEditService]
    });
  });

  it('should be created', inject([StanzaEditService], (service: StanzaEditService) => {
    expect(service).toBeTruthy();
  }));
});
