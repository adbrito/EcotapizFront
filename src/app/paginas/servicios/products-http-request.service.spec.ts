import { TestBed } from '@angular/core/testing';

import { ProductsHttpRequestService } from './products-http-request.service';

describe('ProductsHttpRequestService', () => {
  let service: ProductsHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
