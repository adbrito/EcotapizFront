import { TestBed } from '@angular/core/testing';

import { CreateAnyComponentService } from './create-any-component.service';

describe('CreateAnyComponentService', () => {
  let service: CreateAnyComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAnyComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
