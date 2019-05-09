import { TestBed, inject } from '@angular/core/testing';

import { InscritoService } from './inscrito.service';

describe('InscritoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InscritoService]
    });
  });

  it('should be created', inject([InscritoService], (service: InscritoService) => {
    expect(service).toBeTruthy();
  }));
});
