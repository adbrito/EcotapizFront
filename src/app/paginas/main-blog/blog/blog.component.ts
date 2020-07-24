import { Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, AfterViewInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as data from '../../../../assets/recursos-datos/posts.json';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { DataTransferService } from '../data-transfer.service';
import { PostObject } from '../postObject';
import { BlogDirectiveDirective } from '../blog-directive.directive';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit,AfterViewInit {

  contador: number = 0;
  id: number = 0;
  postObject: PostObject;
  contenedor: any
  @ViewChild(BlogDirectiveDirective, {static: true}) appBlogDirective: BlogDirectiveDirective;

  constructor(private elementRef: ElementRef, private componentFactoryResolver: ComponentFactoryResolver,
              private data: DataTransferService) { 
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.loadPost(this.contador)
    this.data.currentObject.subscribe(objectSource => this.postObject = objectSource);
  }

  loadPost(contador: number){
    const viewContainerRef = this.appBlogDirective.viewContainerRef;
    viewContainerRef.clear();

    let json: any = (data as any).default;
    let i: number;

    for(i=0; i<3; i++){

      let j:number = contador*3 + i;

      this.loadComponent(json[j]);
    }
  }

  

  loadComponent(json: object){
    const viewContainerRef = this.appBlogDirective.viewContainerRef;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BlogCardComponent);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<BlogCardComponent>componentRef.instance).defineAttributes(json)
    //let button = componentRef.location.nativeElement.querySelector('b-boton')
    //button.addEventListener('click', button.onClick.bind(this.newObject(json)));
  }
}