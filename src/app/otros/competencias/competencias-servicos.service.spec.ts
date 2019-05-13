import { TestBed, inject } from '@angular/core/testing';

import { CompetenciasServicosService } from './competencias-servicos.service';

describe('CompetenciasServicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetenciasServicosService]
    });
  });

  it('should be created', inject([CompetenciasServicosService], (service: CompetenciasServicosService) => {
    expect(service).toBeTruthy();
  }));
});
