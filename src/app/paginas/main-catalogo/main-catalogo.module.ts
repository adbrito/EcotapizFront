import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCatalogoRoutingModule } from './main-catalogo-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MainCatalogoComponent } from './main-catalogo.component';


@NgModule({
  declarations: [
    MainCatalogoComponent,
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    MainCatalogoRoutingModule
  ]
})
export class MainCatalogoModule { }
