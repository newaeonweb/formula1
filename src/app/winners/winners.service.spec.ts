import { TestBed, inject } from '@angular/core/testing';

import { WinnersService } from './winners.service';

describe('WinnersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinnersService]
    });
  });

  it('should be created', inject([WinnersService], (service: WinnersService) => {
    expect(service).toBeTruthy();
  }));
});
