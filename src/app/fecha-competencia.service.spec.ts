import { TestBed, inject } from '@angular/core/testing';

import { FechaCompetenciaService } from './fecha-competencia.service';

describe('FechaCompetenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FechaCompetenciaService]
    });
  });

  it('should be created', inject([FechaCompetenciaService], (service: FechaCompetenciaService) => {
    expect(service).toBeTruthy();
  }));
});
