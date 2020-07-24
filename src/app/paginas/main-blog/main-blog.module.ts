import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlogRoutingModule } from './main-blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { MainBlogComponent } from './main-blog.component';
import { PostComponent } from './post/post/post.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogDirectiveDirective } from './blog-directive.directive';



@NgModule({
  declarations: [MainBlogComponent,BlogComponent, PostComponent, BlogCardComponent, BlogDirectiveDirective],
  imports: [
    CommonModule,
    MainBlogRoutingModule
  ]
})
export class MainBlogModule { }
