import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../../servicios/data-transfer.service';
import * as data from '../../../../../assets/recursos-datos/posts.json';
import { PostObject } from '../../../servicios/postObject';
import { ComentarioService } from 'src/app/paginas/servicios/comentario.service';
import { Comentario } from 'src/app/paginas/servicios/Comentario';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postObject: PostObject 
  listComentarios: Array<Comentario> = new Array<Comentario>();
  

  constructor(private data: DataTransferService,private comments: ComentarioService) { }

  async ngOnInit(){
    this.data.currentObject.subscribe(objectSource => this.postObject = objectSource);
    this.listComentarios = await this.comments.getListComentarios(this.postObject.id_post)
  }

}
