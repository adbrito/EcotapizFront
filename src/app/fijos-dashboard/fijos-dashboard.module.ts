import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FijosDashboardRoutingModule } from './fijos-dashboard-routing.module';
import { FijosDashboardComponent } from './fijos-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ModeloComponent } from './modelo/modelo.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DisenioComponent } from './disenio/disenio.component';
import { ClientesComponent } from './clientes/clientes.component';


FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);



@NgModule({
  declarations: [FijosDashboardComponent, FooterComponent, NavbarComponent, 
    SidebarComponent, DashboardComponent, ModeloComponent, PedidosComponent, DisenioComponent, ClientesComponent],
  imports: [
    CommonModule,
    FijosDashboardRoutingModule,
    FusionChartsModule]
})
export class FijosDashboardModule { }
