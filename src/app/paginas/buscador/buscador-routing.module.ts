import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  { path: 'buscador', component: BuscadorComponent, children:[
      {path: 'main', component: ResultadosComponent, outlet: 'buscador'} 
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BuscadorRoutingModule { }
