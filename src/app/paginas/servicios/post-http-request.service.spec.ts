import { TestBed } from '@angular/core/testing';

import { PostHttpRequestService } from './post-http-request.service';

describe('PostHttpRequestService', () => {
  let service: PostHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
