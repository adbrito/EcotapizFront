import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';
import { ImageStorageService } from './image-storage.service';
import { MiscellanousHttpRequestService } from './miscellanous-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class PostHttpRequestService {

  

  constructor(public http: HTTPService, 
              public misc: MiscellanousHttpRequestService,
              public image: ImageStorageService) {}


  async getPostssById(autorID: number){
    let items:Array<Object> = new Array<Object>();
    if(autorID > 0){
      items = await this.getPostsListBySearch(autorID)
    } else if (autorID == -1){
      items = await this.getPostsList()
    }
    return items        
  }
      
  async getPostsList(){
    //console.log(HTTPService.url);
    let posts = await this.make_request()
    this.modify_array(posts)
    await this.misc.delay(1000)
    return posts;
  }

  async make_request(){
    let postsTemp:Array<Object> = new Array<Object>();
    let x = await this.http.get(HTTPService.url + "real-posts", HTTPService.httpOptionsRest).then((res:any) =>{
      postsTemp = res as Array<Object>
    })
    return postsTemp;
  }

  modify_array(posts: Array<Object>){
    posts.forEach( async (post)=>{
      let autorid = post['autor']
      post['autor'] = await this.misc.getAuthorName(autorid)
      post['src'] = await this.image.getImageUrl(post['src'])
    })
  }

  async getPostsListBySearch(autorID: number){
    //console.log(HTTPService.url);
    let items = await this.make_request2(autorID)
    if(items.length > 0){
      this.modify_array(items)
      await this.misc.delay(1100)
    }
    return items;
  }

  async make_request2(autorID: number){
    let productsTemp:Array<Object> = new Array<Object>();
    let append:string = "?q={\"autor\":" + autorID +"}"
    let x = await this.http.get(HTTPService.url + "real-posts" + append , HTTPService.httpOptionsRest).then((res:any) =>{
      productsTemp = res as Array<Object>
    })
    return productsTemp;
  }

  async getPostsListBySearcher(searcher:string){
    //console.log(HTTPService.url);
    let items = await this.make_request3(searcher)
    if(items.length > 0){
      this.modify_array(items)
      await this.misc.delay(1100)
    }
    return items;
  }

  async make_request3(searcher:string){
    let productsTemp:Array<Object> = new Array<Object>();
    let append:string = "?q={\"$or\":[{\"titulo\":{\"$regex\":\"" + searcher + "\"}},{\"keywords\":{\"$regex\":\"" + searcher + "\"}},{\"contenido\":{\"$regex\":\"" + searcher + "\"}}]}"
    let x = await this.http.get(HTTPService.url + "real-posts" + append , HTTPService.httpOptionsRest).then((res:any) =>{
      productsTemp = res as Array<Object>
    })
    return productsTemp;
  }
  


}
