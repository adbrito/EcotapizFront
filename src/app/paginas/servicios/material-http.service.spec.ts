import { TestBed } from '@angular/core/testing';

import { MaterialHTTPService } from './material-http.service';

describe('MaterialHTTPService', () => {
  let service: MaterialHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
