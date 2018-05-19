import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouteModule } from './dashboard.route';
import { GridsterModule } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';


@NgModule({
  imports: [
    CommonModule,
    DashboardRouteModule,
    GridsterModule
  ],
  providers: [DashboardGridsterConfigService],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
