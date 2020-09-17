import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MainCatalogoComponent } from './main-catalogo.component';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { CatalogoDetailComponent } from './catalogo-detail/catalogo-detail.component';
import { CatalogoResultComponent } from './catalogo-result/catalogo-result.component';


const routes: Routes = [
{ path: 'child', component: MainCatalogoComponent, 
    children:[
    {path: 'main', component: CatalogoComponent, outlet: "child"},
    {path: 'item', component: CatalogoItemComponent, outlet: "child"},
    {path: 'detail', component: CatalogoDetailComponent, outlet: "child"},
    {path: 'result', component: CatalogoResultComponent, outlet: "child"}
  ]
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MainCatalogoRoutingModule { }
