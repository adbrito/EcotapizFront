import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador.component';
import { BuscadorRoutingModule } from './buscador-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BuscadorComponent],
  imports: [
    CommonModule,
    BuscadorRoutingModule
  ]
})
export class BuscadorModule { }
