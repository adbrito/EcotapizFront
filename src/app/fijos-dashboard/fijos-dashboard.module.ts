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
import { PedidosComponent } from './pedidos/pedidos.component';
import { DisenioComponent } from './disenio/disenio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ReporteClientesComponent } from './reporte-clientes/reporte-clientes.component';
import { ReportePedidosComponent } from './reporte-pedidos/reporte-pedidos.component';
import { BlogComponent } from './blog/blog.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { MarcasComponent } from './marcas/marcas.component';
import { 
  MatStepperModule
} from '@angular/material/stepper';
import { PieComponent } from './pie/pie.component';
import { PlanoComponent } from './plano/plano.component';
import { ReporteProductoComponent } from './reporte-producto/reporte-producto.component';
import { ReporteNoticiaComponent } from './reporte-noticia/reporte-noticia.component';
import { FormsModule } from '@angular/forms';


FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);



@NgModule({
  declarations: [FijosDashboardComponent, FooterComponent, NavbarComponent, 
    SidebarComponent, DashboardComponent, PedidosComponent,
     DisenioComponent, ClientesComponent, ReporteClientesComponent, ReportePedidosComponent, BlogComponent, SimuladorComponent, MaterialesComponent, MarcasComponent, PieComponent, PlanoComponent, ReporteProductoComponent, ReporteNoticiaComponent],
  imports: [
    CommonModule,
    FormsModule,
    FijosDashboardRoutingModule,
    FusionChartsModule,MatStepperModule]
})
export class FijosDashboardModule { }
