import { TestBed } from '@angular/core/testing';

import { UsuarioHTTPService } from './usuario-http.service';

describe('UsuarioHTTPService', () => {
  let service: UsuarioHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
