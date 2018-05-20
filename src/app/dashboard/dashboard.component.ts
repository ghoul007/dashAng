import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  config: GridsterConfig;

  items: Array<GridsterItem>;


  constructor(private gridster: DashboardGridsterConfigService) { }

  ngOnInit() {

    this.config = this.gridster.getConfig();
    this.items = environment.dashConfig.items;
  }

}
