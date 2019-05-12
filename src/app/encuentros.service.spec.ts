import { TestBed, inject } from '@angular/core/testing';

import { EncuentrosService } from './encuentros.service';

describe('EncuentrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncuentrosService]
    });
  });

  it('should be created', inject([EncuentrosService], (service: EncuentrosService) => {
    expect(service).toBeTruthy();
  }));
});
