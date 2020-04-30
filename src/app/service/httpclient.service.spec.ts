import { TestBed } from '@angular/core/testing';

import { HttpclientService } from './user.service';

describe('HttpclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpclientService = TestBed.get(HttpclientService);
    expect(service).toBeTruthy();
  });
});
