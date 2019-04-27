import { TestBed, inject } from '@angular/core/testing';

import { ResultadoIService } from './resultadosI.service';

describe('ResultadoHService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultadoIService]
    });
  });

  it('should be created', inject([ResultadoIService], (service: ResultadoIService) => {
    expect(service).toBeTruthy();
  }));
});