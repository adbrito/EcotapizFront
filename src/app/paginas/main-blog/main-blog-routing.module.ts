import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { MainBlogComponent } from './main-blog.component';


const routes: Routes = [
  { path: '', component: MainBlogComponent, children:[
    {path: '', component: BlogComponent, outlet: "blog-child"}
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MainBlogRoutingModule { }
