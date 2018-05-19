import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouteModule } from './dashboard.route';
import { GridsterModule } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRouteModule,
    GridsterModule
  ],
  providers: [DashboardGridsterConfigService],
  entryComponents: [HelloWorldComponent],
  declarations: [DashboardComponent, WidgetContainerComponent, WidgetHostDirective, HelloWorldComponent]
})
export class DashboardModule { }
