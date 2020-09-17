import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';
import { MiscellanousHttpRequestService } from './miscellanous-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioHTTPService {

  constructor(public http: HTTPService, 
    public misc: MiscellanousHttpRequestService) { }

  async getComentarios(id_post: string){
    let items = await this.make_request(id_post)
    this.modify_array(items)
    await this.misc.delay(1300)
    return items;
  }

  async make_request(id_post: string){
    let comentarios:Array<Object> = new Array<Object>();
    let append:string = "?q={\"post\":\"" + id_post +"\"}"
    let x = await this.http.get(HTTPService.url + "comentarios" + append , HTTPService.httpOptionsRest).then((res:any) =>{
      comentarios = res as Array<Object>
    })
    return comentarios;
  }

  modify_array(comments: Array<Object>){
    comments.forEach( async (comment)=>{
      comment['autor'] = await this.misc.getAuthorName(comment['autor'])  
    })
  }
}
