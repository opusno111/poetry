import { TestBed, inject } from '@angular/core/testing';

import { StanzaService } from './stanza.service';

describe('StanzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StanzaService]
    });
  });

  it('should be created', inject([StanzaService], (service: StanzaService) => {
    expect(service).toBeTruthy();
  }));
});
