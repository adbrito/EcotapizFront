import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimuladorRoutingModule } from './simulador-routing.module';
import { SimuladorComponent } from './simulador.component';
import { NavSimuladorComponent } from './nav-simulador/nav-simulador.component';
import { VistaPrevComponent } from './vista-prev/vista-prev.component';
import { ModeloComponent } from './opciones/modelo/modelo.component';
import { DisenioComponent } from './opciones/disenio/disenio.component';
import { MaterialesComponent } from './opciones/materiales/materiales.component';
import { CotizacionComponent } from './opciones/cotizacion/cotizacion.component';
import {modelElement} from 'src/assets/js/model-element.min.js';
import { ProviderAst } from '@angular/compiler';
import{SimuladorService} from 'src/app/paginas/simulador/servicios/simulador.service'


@NgModule({
  declarations: [SimuladorComponent,NavSimuladorComponent, VistaPrevComponent, ModeloComponent, DisenioComponent, MaterialesComponent, CotizacionComponent],
  imports: [
    CommonModule,
    SimuladorRoutingModule
    
  ],
  providers:[SimuladorService]
})
export class SimuladorModule { }
