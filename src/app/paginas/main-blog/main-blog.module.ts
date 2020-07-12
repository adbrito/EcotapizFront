import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlogRoutingModule } from './main-blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { MainBlogComponent } from './main-blog.component';



@NgModule({
  declarations: [MainBlogComponent,BlogComponent],
  imports: [
    CommonModule,
    MainBlogRoutingModule
  ]
})
export class MainBlogModule { }
