import { Injectable, ViewContainerRef } from '@angular/core';
import * as posts from '../../../assets/recursos-datos/posts.json'
import * as products from '../../../assets/recursos-datos/productos.json'
import { DynamicComponentService } from './dynamic-component.service';
import { GenComponent } from './GenComponent';
import { PostHttpRequestService } from './post-http-request.service';
import { ProductsHttpRequestService } from './products-http-request.service';

@Injectable({
  providedIn: 'root'
})

export class CreateAnyComponentService {
  listPosts = (posts as any).default;
  listProducts = (products as any).default;

  constructor(private loadService: DynamicComponentService, public postService: PostHttpRequestService, public itemService: ProductsHttpRequestService) { }

  createUsingList(component: any, lists: ViewContainerRef[], numComponents: number, 
    counter: number, className: string, listResult: Array<Object>){
      let controller: boolean = false
      if(className === "PostObject"){
        this.listPosts = listResult
        controller = true
      }else if (className === "ItemObject"){
        this.listProducts = listResult
        controller = true
      }else{
        console.log("Class not implemented")
      }
      if(controller)
        this.createManyComponentsManyViews2(component, lists, numComponents, counter, className)
  }


  async createManyComponentsManyViews(component: any, lists: ViewContainerRef[], numComponents: number, 
    counter: number, className: string){
      if(className === "PostObject"){
        await this.postService.getPostsList().then((value)=>{
          this.listPosts = value
          this.createManyComponentsManyViews2(component, lists, numComponents, counter, className)
        });
      }else if (className === "ItemObject"){
        await this.itemService.getProductsList().then((value)=>{
          this.listProducts = value
          this.createManyComponentsManyViews2(component, lists, numComponents, counter, className)
        })
      }else{
        console.log("Class not implemented")
      }
  }

  async createManyComponentsManyViews2(component: any, lists: ViewContainerRef[], numComponents: number, 
    counter: number, className: string){
      let i: number = 0;

      for(i= 0; i<numComponents; i++){
        let j:number = counter*numComponents + i;
        let createdComponent: any
        if(lists.length === 1)
          createdComponent = this.loadService.insertComponent(component, lists[0]);
        else
          createdComponent = this.loadService.insertComponent(component, lists[i]);
        let contentObject: object
        if(className === "PostObject")
            contentObject = this.listPosts[j];
        else if (className === "ItemObject")
          contentObject = this.listProducts[j];
        else
          contentObject = null;
        
        if(contentObject !== null)
          (<GenComponent> createdComponent).defineAttributes(contentObject);
      }
  }

  createComponentOneView(component: any, view: ViewContainerRef, data: object){
    let createdComponent = this.loadService.insertComponent(component, view);
    (<GenComponent> createdComponent).defineAttributes(data);
  }

}
