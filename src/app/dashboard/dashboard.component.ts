import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

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
    this.items = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 1, x: 1},
      {cols: 1, rows: 1, y: 0, x: 1},
      {cols: 1, rows: 1, y: 2, x: 0},
      {cols: 1, rows: 1, y: 0, x: 2},
    ];
  }

}
