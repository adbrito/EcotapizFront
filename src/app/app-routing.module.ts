import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

import { AppComponent } from './app.component';



const routes: Routes =
  [{
    path: 'home',  component: HomeComponent,
  },
  {
    path: 'catalogo',  loadChildren: () => import('./paginas/main-catalogo/main-catalogo.module').then(m => m.MainCatalogoModule),
  },
  {
    path: 'blog',  loadChildren: () => import('./paginas/main-blog/main-blog.module').then(m => m.MainBlogModule),
  },
  {
    path: 'contacto',  component:ContactoComponent,
  },
  { path: 'admin', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule) },
  { path: 'simulador', loadChildren: () => import('./paginas/simulador/simulador.module').then(m => m.SimuladorModule) },
  {path: '**', component: HomeComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
