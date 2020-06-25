import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BlogComponent } from './paginas/blog/blog.component';

import { AppComponent } from './app.component';

<<<<<<< HEAD
const routes: Routes = [{ path: 'app', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule) }];
=======

const routes: Routes =
  [{
    path: 'home',
    component: AppComponent,
  },
  { path: 'simulador', loadChildren: () => import('./paginas/simulador/simulador.module').then(m => m.SimuladorModule) },
  {path: '**', component: AppComponent}];
>>>>>>> 9e44ef173426044a1af35a1f0ffeb5c2072943f6

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
