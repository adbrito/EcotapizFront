import { Injectable, ViewContainerRef } from '@angular/core';
import * as posts from '../../../assets/recursos-datos/posts.json'
import * as products from '../../../assets/recursos-datos/productos.json'
import { DynamicComponentService } from './dynamic-component.service';
import { GenComponent } from './GenComponent';

@Injectable({
  providedIn: 'root'
})

export class CreateAnyComponentService {
  listPosts = (posts as any).default;
  listProducts = (products as any).default;

  constructor(private loadService: DynamicComponentService) { }

  createManyComponentsManyViews(component: any, lists: ViewContainerRef[], numComponents: number, 
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
