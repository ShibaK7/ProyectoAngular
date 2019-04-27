import { TestBed, inject } from '@angular/core/testing';

import { ResultadoDService } from './resultadosD.service';

describe('ResultadoHService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultadoDService]
    });
  });

  it('should be created', inject([ResultadoDService], (service: ResultadoDService) => {
    expect(service).toBeTruthy();
  }));
});