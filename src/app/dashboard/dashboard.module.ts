import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouteModule } from './dashboard.route';
@NgModule({
  imports: [
    CommonModule,
    DashboardRouteModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
