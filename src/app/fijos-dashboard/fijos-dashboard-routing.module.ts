import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FijosDashboardComponent } from './fijos-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';





const routes: Routes = [{ path: '', component: FijosDashboardComponent,children:[
  {path: '', component: DashboardComponent, outlet:'principal' },
  {path: 'pedidos', component: PedidosComponent, outlet:'principal',pathMatch: 'full' }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FijosDashboardRoutingModule { }
