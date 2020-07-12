import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MainCatalogoComponent } from './main-catalogo.component';


const routes: Routes = [
  { path: '', component: MainCatalogoComponent, children:[
    { path: '', component: CatalogoComponent, outlet: 'child',pathMatch: 'full'}
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
