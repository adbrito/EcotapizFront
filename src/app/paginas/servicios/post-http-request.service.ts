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

  


}
