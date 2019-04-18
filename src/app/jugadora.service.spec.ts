import { TestBed, inject } from '@angular/core/testing';

import { JugadoraService } from './jugadora.service';

describe('JugadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadoraService]
    });
  });

  it('should be created', inject([JugadoraService], (service: JugadoraService) => {
    expect(service).toBeTruthy();
  }));
});
