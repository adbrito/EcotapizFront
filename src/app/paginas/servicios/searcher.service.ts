import { Injectable, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from '../servicios/dynamic-component.service';
import * as posts from '../../../assets/recursos-datos/posts.json'
import * as products from '../../../assets/recursos-datos/productos.json'
import { CardPostComponent } from '../buscador/card-post/card-post.component';
import { CardItemComponent } from '../buscador/card-item/card-item.component';

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
      let buscador = searcher.toLowerCase();
      for(let post of this.listPosts){
        let title:string = post['titulo'].toLowerCase()
        let key:string = post['keywords'].toLowerCase()
        let content:string = post['contenido'].toLowerCase()
        if (title.includes(buscador)
        || key.includes(buscador)
        || content.includes(buscador)
        || searcher === ""){
            this.createPostComponent(post, view);
        }
      }
  }

  searchProductos(searcher: string, view: ViewContainerRef){
    let buscador = searcher.toLowerCase();
    for(let products of this.listProducts){
      let title:string = products['titulo'].toLowerCase()
      let key:string = products['keywords'].toLowerCase()
      let content:string = products['contenido'].toLowerCase()
      if (title.includes(buscador)
      || key.includes(buscador)
      || content.includes(buscador)
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
