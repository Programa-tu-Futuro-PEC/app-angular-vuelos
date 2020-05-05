import { TestBed } from '@angular/core/testing';

import { AeropuertoServiceService } from './aeropuerto-service.service';

describe('AeropuertoServiceService', () => {
  let service: AeropuertoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeropuertoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
