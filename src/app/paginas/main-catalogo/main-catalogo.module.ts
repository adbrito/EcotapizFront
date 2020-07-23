import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCatalogoRoutingModule } from './main-catalogo-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MainCatalogoComponent } from './main-catalogo.component';
import { SidebarSearcherComponent } from './sidebar-searcher/sidebar-searcher/sidebar-searcher.component';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { CatalogoDirective } from './catalogo.directive';
import { OnCreateDirective } from './on-create.directive';
import { Catalogo2Directive } from './catalogo2.directive';
import { Catalogo3Directive } from './catalogo3.directive';
import { Catalogo4Directive } from './catalogo4.directive';
import { Catalogo5Directive } from './catalogo5.directive';
import { Catalogo6Directive } from './catalogo6.directive';
import { CatalogoDetailComponent } from './catalogo-detail/catalogo-detail.component';


@NgModule({
  declarations: [
    MainCatalogoComponent,
    CatalogoComponent,
    SidebarSearcherComponent,
    CatalogoItemComponent,
    CatalogoDirective,
    OnCreateDirective,
    Catalogo2Directive,
    Catalogo3Directive,
    Catalogo4Directive,
    Catalogo5Directive,
    Catalogo6Directive,
    CatalogoDetailComponent
  ],
  imports: [
    CommonModule,
    MainCatalogoRoutingModule
  ]
})
export class MainCatalogoModule { }
