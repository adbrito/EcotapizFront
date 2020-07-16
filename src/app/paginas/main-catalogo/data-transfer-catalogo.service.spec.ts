import { TestBed } from '@angular/core/testing';

import { DataTransferCatalogoService } from './data-transfer-catalogo.service';

describe('DataTransferCatalogoService', () => {
  let service: DataTransferCatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransferCatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
