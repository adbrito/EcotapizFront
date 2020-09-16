import { TestBed } from '@angular/core/testing';

import { MiscellanousHttpRequestService } from './miscellanous-http-request.service';

describe('MiscellanousHttpRequestService', () => {
  let service: MiscellanousHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscellanousHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
