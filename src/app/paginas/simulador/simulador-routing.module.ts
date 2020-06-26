import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavSimuladorComponent } from './nav-simulador/nav-simulador.component';
import { VistaPrevComponent } from './vista-prev/vista-prev.component';
import { ModeloComponent } from './opciones/modelo/modelo.component';
import { DisenioComponent } from './opciones/disenio/disenio.component';
import { MaterialesComponent } from './opciones/materiales/materiales.component';
import { CotizacionComponent } from './opciones/cotizacion/cotizacion.component';

import { SimuladorComponent } from './simulador.component';

const routes: Routes = [{ path: '', component: VistaPrevComponent},
{ path: 'modelo', component: DisenioComponent ,outlet: 'aux' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimuladorRoutingModule { }
