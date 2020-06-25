import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BlogComponent } from './paginas/blog/blog.component';

import { AppComponent } from './app.component';



const routes: Routes =
  [{
    path: 'home',  component: HomeComponent,
  },
  { path: 'admin', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule) },
  { path: 'simulador', loadChildren: () => import('./paginas/simulador/simulador.module').then(m => m.SimuladorModule) },
  {path: '**', component: AppComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
