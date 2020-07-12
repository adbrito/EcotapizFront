import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BuscadorComponent } from './buscador.component';

const routes: Routes = [
  { path: '', component: BuscadorComponent, children:[

  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BuscadorRoutingModule { }
