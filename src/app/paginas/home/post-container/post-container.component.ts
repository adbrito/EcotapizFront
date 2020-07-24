import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CatalogoDirective } from '../../main-catalogo/catalogo.directive';
import * as posts from '../../../../assets/recursos-datos/posts.json';
import { Catalogo2Directive } from '../../main-catalogo/catalogo2.directive';
import { Catalogo3Directive } from '../../main-catalogo/catalogo3.directive';
import { DynamicComponentService } from '../../main-catalogo/dynamic-component.service';
import { DataTransferService } from '../../main-blog/data-transfer.service';
import { BlogNoteComponent } from '../blog-note/blog-note.component';
import { PostObject } from '../../main-blog/postObject';
@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  contador: number = 0;
  items = [0,0,0]
  itemObject: PostObject

  @ViewChild(CatalogoDirective,{static: true}) post1: CatalogoDirective;
  @ViewChild(Catalogo2Directive,{static: true}) post2: Catalogo2Directive;
  @ViewChild(Catalogo3Directive,{static: true}) post3: Catalogo3Directive;

  lista:ViewContainerRef[] = []

  constructor(private service: DynamicComponentService, private data: DataTransferService) { }

  ngOnInit(): void {
    this.lista = [this.post1.viewContainerRef, this.post2.viewContainerRef, this.post3.viewContainerRef]
    this.lista.forEach(selector => selector.clear())
    this.contador = 0
    this.loadPosts()
    this.data.currentObject.subscribe(objectSource => this.itemObject = objectSource);
  }

  loadPosts(){
    let i:number ;
    
    for(i=0; i<3; i++){

      let j:number = this.contador*6 + i;
      this.items[i] = j
    }
    
    this.lista.forEach(selector => this.loadComponent2(selector))
  }

  loadComponent2(view: ViewContainerRef){
    let json = (posts as any).default;
    let object = json[this.contador]
    const viewContainerRef = view;
    let componente = this.service.insertComponent(BlogNoteComponent, viewContainerRef );
    (<BlogNoteComponent> componente).defineAttributes(object);
    this.contador++;
  }

}
