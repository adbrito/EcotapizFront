import { TestBed } from '@angular/core/testing';

import { GrafBarraService } from './graf-barra.service';

describe('GrafBarraService', () => {
  let service: GrafBarraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrafBarraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
