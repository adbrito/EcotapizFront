import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorComponent } from './administrador.component';

const routes: Routes = [{ path: 'login', component: AdministradorComponent },
{ path: '', component: AdministradorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
