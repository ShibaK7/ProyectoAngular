import { TestBed, inject } from '@angular/core/testing';

import { AuthUsuarioService } from './auth-usuario.service';

describe('AuthUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthUsuarioService]
    });
  });

  it('should be created', inject([AuthUsuarioService], (service: AuthUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
