import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FijosDashboardRoutingModule } from './fijos-dashboard-routing.module';
import { FijosDashboardComponent } from './fijos-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [FijosDashboardComponent, FooterComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    FijosDashboardRoutingModule
  ]
})
export class FijosDashboardModule { }
