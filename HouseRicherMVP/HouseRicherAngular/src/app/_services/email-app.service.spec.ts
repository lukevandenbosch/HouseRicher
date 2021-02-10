import { TestBed } from '@angular/core/testing';

import { EmailAppService } from './email-app.service';

describe('EmailAppService', () => {
  let service: EmailAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
