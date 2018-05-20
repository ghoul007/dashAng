import { TestBed, inject } from '@angular/core/testing';

import { GiphyDataService } from './giphy-data.service';

describe('GiphyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphyDataService]
    });
  });

  it('should be created', inject([GiphyDataService], (service: GiphyDataService) => {
    expect(service).toBeTruthy();
  }));
});
