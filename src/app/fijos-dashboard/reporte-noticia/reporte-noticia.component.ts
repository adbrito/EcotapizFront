import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostHttpRequestService } from 'src/app/paginas/servicios/post-http-request.service';
import { PostObject } from 'src/app/paginas/servicios/postObject';
import { Usuario } from 'src/app/paginas/servicios/Usuario';
import { UsuarioService } from 'src/app/paginas/servicios/usuario.service';

@Component({
  selector: 'app-reporte-noticia',
  templateUrl: './reporte-noticia.component.html',
  styleUrls: ['./reporte-noticia.component.css']
})
export class ReporteNoticiaComponent implements OnInit {

  listUsuario: Array<Usuario> = new Array<Usuario>()
  listProductos: Array<PostObject> = new Array<PostObject>()
  items:Array<Object> = new Array<Object>();
  selectedId: number;
  selected: number= -1;

  constructor(public user: UsuarioService, 
    private router: Router,
    private route: ActivatedRoute,
    public post: PostHttpRequestService) { }

  async ngOnInit(){
    this.listUsuario = await this.user.getListUsuario();
    console.log("ID Before: " + this.route.parent.snapshot.paramMap.get('id'))
    this.selectedId = Number(this.route.parent.snapshot.paramMap.get('id'))
    console.log("ID After: " + this.selectedId)
    this.items = await this.post.getPostssById(this.selectedId)
  }

  async onOptionsSelected(){
    console.log("Seleccionado: " + this.selected)
    this.items = await this.post.getPostssById(this.selected)
    
  }

}
