import { Injectable, ViewContainerRef } from '@angular/core';
import * as posts from '../../../assets/recursos-datos/posts.json'
import * as products from '../../../assets/recursos-datos/productos.json'
import { CardPostComponent } from '../buscador/card-post/card-post.component';
import { CardItemComponent } from '../buscador/card-item/card-item.component';
import { CreateAnyComponentService } from './create-any-component.service';
import { PostHttpRequestService } from './post-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  listPosts = (posts as any).default;
  listProducts = (products as any).default; 

  constructor(private loadService: CreateAnyComponentService, public postService: PostHttpRequestService) {}

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
            this.loadService.createComponentOneView(CardPostComponent, view, post);
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
        this.loadService.createComponentOneView(CardItemComponent, view, products);
      }
    }
  }


}
