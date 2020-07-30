import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { DataTransferService } from '../../servicios/data-transfer.service';
import { PostObject } from '../../servicios/postObject';
import { BlogDirectiveDirective } from '../blog-directive.directive';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { CreateAnyComponentService } from '../../servicios/create-any-component.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit,AfterViewInit {

  postObject: PostObject;
  @ViewChild(BlogDirectiveDirective, {static: true}) appBlogDirective: BlogDirectiveDirective;

  constructor(private data: DataTransferService, private service: CreateAnyComponentService) { 
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.appBlogDirective.viewContainerRef.clear()
    this.service.createManyComponentsManyViews(BlogCardComponent, [this.appBlogDirective.viewContainerRef],
      3, 0, "PostObject")
    this.data.currentObject.subscribe(objectSource => this.postObject = objectSource);
  }

}