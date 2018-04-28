import { TestBed, inject } from '@angular/core/testing';

import { PoemService } from './poem.service';

describe('PoemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoemService]
    });
  });

  it('should be created', inject([PoemService], (service: PoemService) => {
    expect(service).toBeTruthy();
  }));
});
