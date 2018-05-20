import { TestBed, inject } from '@angular/core/testing';

import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';

describe('DashboardGridsterConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardGridsterConfigService]
    });
  });

  it('should be created', inject([DashboardGridsterConfigService], (service: DashboardGridsterConfigService) => {
    expect(service).toBeTruthy();
  }));
});
