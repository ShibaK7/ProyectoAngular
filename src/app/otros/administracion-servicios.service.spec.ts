import { TestBed, inject } from '@angular/core/testing';

import { AdministracionServiciosService } from './administracion-servicios.service';

describe('AdministracionServiciosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministracionServiciosService]
    });
  });

  it('should be created', inject([AdministracionServiciosService], (service: AdministracionServiciosService) => {
    expect(service).toBeTruthy();
  }));
});
