import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { MainBlogComponent } from './main-blog.component';
import { PostComponent } from './post/post/post.component';


const routes: Routes = [
  { path: 'aux', component: MainBlogComponent, 
  children:[
    {path: 'main', component: BlogComponent, outlet: "aux"},
    {path: 'post', component: PostComponent, outlet: "aux"}
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
