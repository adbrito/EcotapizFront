import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador.component';
import { BuscadorRoutingModule } from './buscador-routing.module';
import { RouterModule } from '@angular/router';
import { SidebarBuscadorComponent } from './sidebar-buscador/sidebar-buscador.component';
import { CardPostComponent } from './card-post/card-post.component';
import { CardItemComponent } from './card-item/card-item.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SearcherSelectorDirective } from './searcher-selector.directive';



@NgModule({
  declarations: [BuscadorComponent, SidebarBuscadorComponent, CardPostComponent, CardItemComponent, ResultadosComponent, SearcherSelectorDirective],
  imports: [
    CommonModule,
    BuscadorRoutingModule
  ]
})
export class BuscadorModule { }
