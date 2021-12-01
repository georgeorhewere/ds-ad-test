import { TestBed } from '@angular/core/testing';

import { DsADAuthService } from './ds-adauth.service';

describe('DsADAuthService', () => {
  let service: DsADAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsADAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
