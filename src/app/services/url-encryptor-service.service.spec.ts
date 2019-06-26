import { TestBed } from '@angular/core/testing';

import { UrlEncryptorServiceService } from './url-encryptor-service.service';

describe('UrlEncryptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlEncryptorServiceService = TestBed.get(UrlEncryptorServiceService);
    expect(service).toBeTruthy();
  });
});
