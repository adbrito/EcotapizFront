import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FijosDashboardComponent } from './fijos-dashboard.component';





const routes: Routes = [{ path: '', component: FijosDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FijosDashboardRoutingModule { }
