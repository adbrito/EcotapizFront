import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FijosDashboardRoutingModule } from './fijos-dashboard-routing.module';
import { FijosDashboardComponent } from './fijos-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [FijosDashboardComponent, FooterComponent, NavbarComponent, SidebarComponent, DashboardComponent],
  imports: [
    CommonModule,
    FijosDashboardRoutingModule
  ]
})
export class FijosDashboardModule { }
