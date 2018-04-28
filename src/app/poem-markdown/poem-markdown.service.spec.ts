import { TestBed, inject } from '@angular/core/testing';

import { PoemMarkdownService } from './poem-markdown.service';

describe('PoemMarkdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoemMarkdownService]
    });
  });

  it('should be created', inject([PoemMarkdownService], (service: PoemMarkdownService) => {
    expect(service).toBeTruthy();
  }));
});
