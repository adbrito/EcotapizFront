import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CatalogoDirective } from '../../main-catalogo/catalogo.directive';
import { Catalogo2Directive } from '../../main-catalogo/catalogo2.directive';
import { Catalogo3Directive } from '../../main-catalogo/catalogo3.directive';
import { DataTransferService } from '../../servicios/data-transfer.service';
import { BlogNoteComponent } from '../blog-note/blog-note.component';
import { PostObject } from '../../servicios/postObject';
import { CreateAnyComponentService } from '../../servicios/create-any-component.service';
@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  itemObject: PostObject

  @ViewChild(CatalogoDirective,{static: true}) post1: CatalogoDirective;
  @ViewChild(Catalogo2Directive,{static: true}) post2: Catalogo2Directive;
  @ViewChild(Catalogo3Directive,{static: true}) post3: Catalogo3Directive;

  lista:ViewContainerRef[] = []

  constructor(private data: DataTransferService, private creatorService: CreateAnyComponentService) { }

  ngOnInit(): void {
    this.lista = [this.post1.viewContainerRef, this.post2.viewContainerRef, this.post3.viewContainerRef]
    this.lista.forEach(selector => selector.clear())
    this.creatorService.createManyComponentsManyViews(BlogNoteComponent, this.lista, 3, 0, "PostObject")
    this.data.currentObject.subscribe(objectSource => this.itemObject = objectSource);
  }

  

}
