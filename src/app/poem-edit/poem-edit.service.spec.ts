import { TestBed, inject } from '@angular/core/testing';

import { PoemEditService } from './poem-edit.service';

describe('PoemEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoemEditService]
    });
  });

  it('should be created', inject([PoemEditService], (service: PoemEditService) => {
    expect(service).toBeTruthy();
  }));
});
