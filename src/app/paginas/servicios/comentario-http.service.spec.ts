import { TestBed } from '@angular/core/testing';

import { ComentarioHTTPService } from './comentario-http.service';

describe('ComentarioHTTPService', () => {
  let service: ComentarioHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentarioHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
