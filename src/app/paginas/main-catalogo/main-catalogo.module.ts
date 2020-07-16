import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCatalogoRoutingModule } from './main-catalogo-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MainCatalogoComponent } from './main-catalogo.component';
import { SidebarSearcherComponent } from './sidebar-searcher/sidebar-searcher/sidebar-searcher.component';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { CatalogoDirective } from './catalogo.directive';


@NgModule({
  declarations: [
    MainCatalogoComponent,
    CatalogoComponent,
    SidebarSearcherComponent,
    CatalogoItemComponent,
    CatalogoDirective
  ],
  imports: [
    CommonModule,
    MainCatalogoRoutingModule
  ]
})
export class MainCatalogoModule { }
