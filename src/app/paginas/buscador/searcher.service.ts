import { Injectable, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from '../main-catalogo/dynamic-component.service';
import * as posts from '../../../assets/recursos-datos/posts.json'
import * as products from '../../../assets/recursos-datos/productos.json'
import { CardPostComponent } from './card-post/card-post.component';
import { CardItemComponent } from './card-item/card-item.component';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  listPosts = (posts as any).default;
  listProducts = (products as any).default; 

  constructor(private loadService: DynamicComponentService) {}

  buscarTodo(searcher:string,view: ViewContainerRef){
      this.searchNoticias(searcher,view)
      this.searchProductos(searcher,view)
  }

  searchNoticias(searcher: string, view: ViewContainerRef){
      for(let post of this.listPosts){
        if (post['titulo'].includes(searcher)
        || post['keywords'].includes(searcher)
        || post['contenido'].includes(searcher)
        || searcher === ""){
            this.createPostComponent(post, view);
        }
      }
  }

  searchProductos(searcher: string, view: ViewContainerRef){
    for(let products of this.listProducts){
      if (products['titulo'].includes(searcher)
      || products['keywords'].includes(searcher)
      || products['contenido'].includes(searcher)
      || searcher === ""){
          this.createItemComponent(products,view)
      }
    }
  }

  createPostComponent(objeto: object, view:ViewContainerRef){
      let post = this.loadService.insertComponent(CardPostComponent,view);
      (<CardPostComponent> post).defineAttributes(objeto)
  }

  createItemComponent(objeto: object, view:ViewContainerRef){
    let item = this.loadService.insertComponent(CardItemComponent,view);
    (<CardItemComponent> item).defineAttributes(objeto)
}


}
