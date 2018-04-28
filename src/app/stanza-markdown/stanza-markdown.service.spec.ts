import { TestBed, inject } from '@angular/core/testing';

import { StanzaMarkdownService } from './stanza-markdown.service';

describe('StanzaMarkdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StanzaMarkdownService]
    });
  });

  it('should be created', inject([StanzaMarkdownService], (service: StanzaMarkdownService) => {
    expect(service).toBeTruthy();
  }));
});
