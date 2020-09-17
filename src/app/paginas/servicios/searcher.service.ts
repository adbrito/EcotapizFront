import { Injectable, ViewContainerRef } from '@angular/core';
import * as posts from '../../../assets/recursos-datos/posts.json'
import * as products from '../../../assets/recursos-datos/productos.json'
import { CardPostComponent } from '../buscador/card-post/card-post.component';
import { CardItemComponent } from '../buscador/card-item/card-item.component';
import { CreateAnyComponentService } from './create-any-component.service';
import { PostHttpRequestService } from './post-http-request.service';
import { ProductsHttpRequestService } from './products-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  listPosts = (posts as any).default;
  listProducts = (products as any).default; 

  constructor(private loadService: CreateAnyComponentService, 
    public postService: PostHttpRequestService,
    public productsService: ProductsHttpRequestService) {}

  async buscarTodo(searcher:string,view: ViewContainerRef){
      this.listPosts = await this.postService.getPostsListBySearcher(searcher)
      this.listProducts = await this.productsService.getProductsListBySearcher(searcher)
      this.searchNoticias(view)
      this.searchProductos(view)
  }

  searchNoticias(view: ViewContainerRef){
      for(let post of this.listPosts){
        this.loadService.createComponentOneView(CardPostComponent, view, post);
      }
  }

  searchProductos(view: ViewContainerRef){
    for(let products of this.listProducts){
        this.loadService.createComponentOneView(CardItemComponent, view, products);
    }
  }


}
