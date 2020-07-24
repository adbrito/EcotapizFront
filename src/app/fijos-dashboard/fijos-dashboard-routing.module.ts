import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimuladorComponent } from "../fijos-dashboard/simulador/simulador.component";
import { FijosDashboardComponent } from './fijos-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import {ReportePedidosComponent} from './reporte-pedidos/reporte-pedidos.component';
import {ReporteClientesComponent} from './reporte-clientes/reporte-clientes.component';
import {MatStepperModule} from '@angular/material/stepper';





const routes: Routes = 
[/*{ path: '', component: FijosDashboardComponent,children:[
  {path: '', component: DashboardComponent, outlet:'principal' },
  {path: 'pedidos', component: PedidosComponent, outlet:'principal',pathMatch: 'full' }
] }*/
{
  path:'aux', component: FijosDashboardComponent,children:[
    {
    path: 'simulador-admin', component: SimuladorComponent, outlet: "aux"
  },
  {
    path: 'main', component: DashboardComponent, outlet: "aux"
  },
  {
    path: 'pedidos', component: PedidosComponent, outlet: "aux"
  },
  {
    path: 'reporte-pedidos', component: ReportePedidosComponent, outlet: "aux"
  },
  {
    path: 'reporte-clientes', component: ReporteClientesComponent, outlet: "aux"
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatStepperModule],
  exports: [RouterModule]
})
export class FijosDashboardRoutingModule { }
