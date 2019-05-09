import { TestBed, inject } from '@angular/core/testing';

import { CompetenciaService } from './competencia.service';

describe('CompetenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetenciaService]
    });
  });

  it('should be created', inject([CompetenciaService], (service: CompetenciaService) => {
    expect(service).toBeTruthy();
  }));
});
