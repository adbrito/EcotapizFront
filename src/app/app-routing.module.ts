import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { SimuladorRoutingModule } from './paginas/simulador/simulador-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';




const routes: Routes =
  [{
    path: 'home',  component: HomeComponent,
  },
  {
    path: 'blog',  component: BlogComponent,
  },
  {
    path: 'catalogo',  component: CatalogoComponent,
  },
  {
    path: 'contacto',  component:ContactoComponent,
  },
  
  { path: 'admin', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule) },
  { path: 'simulador', loadChildren: () => import('./paginas/simulador/simulador.module').then(m => m.SimuladorModule) }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
