import { Injectable } from '@angular/core';
import { Comentario } from './Comentario';
import { ComentarioHTTPService } from './comentario-http.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(public comment:ComentarioHTTPService) { }

  async getListComentarios(id_post: string){
    let comentarios:Array<Comentario> = new Array<Comentario>();
    let results = await this.comment.getComentarios(id_post)
    results.forEach((objeto) =>{
      let temp = new Comentario()
      temp.defineAttributes(objeto)
      comentarios.push(temp)
    })
    return comentarios
  }

}
