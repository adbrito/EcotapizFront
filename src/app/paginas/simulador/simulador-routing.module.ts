import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavSimuladorComponent } from './nav-simulador/nav-simulador.component';
import { VistaPrevComponent } from './vista-prev/vista-prev.component';
import { ModeloComponent } from './opciones/modelo/modelo.component';
import { DisenioComponent } from './opciones/disenio/disenio.component';
import { MaterialesComponent } from './opciones/materiales/materiales.component';
import { CotizacionComponent } from './opciones/cotizacion/cotizacion.component';

import { SimuladorComponent } from './simulador.component';

const routes: Routes = [
  {
    path: 'app', component: SimuladorComponent,
    children: [
      { path: 'modelo', component: ModeloComponent, outlet: 'app' },
      { path: 'materiales', component: MaterialesComponent, outlet: 'app' },
      { path: 'disenio', component: DisenioComponent, outlet: 'app' },
      { path: 'cotizacion', component: CotizacionComponent, outlet: 'app' }

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimuladorRoutingModule { }
