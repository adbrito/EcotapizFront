import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CatalogoDirective } from '../../main-catalogo/catalogo.directive';
import * as posts from '../../../../assets/recursos-datos/posts.json';
import { Catalogo2Directive } from '../../main-catalogo/catalogo2.directive';
import { Catalogo3Directive } from '../../main-catalogo/catalogo3.directive';
import { DynamicComponentService } from '../../main-catalogo/dynamic-component.service';
import { DataTransferService } from '../../main-blog/data-transfer.service';
@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  contador: number;

  @ViewChild(CatalogoDirective,{static: true}) post1: CatalogoDirective;
  @ViewChild(Catalogo2Directive,{static: true}) post2: Catalogo2Directive;
  @ViewChild(Catalogo3Directive,{static: true}) post3: Catalogo3Directive;

  lista:ViewContainerRef[] = []

  constructor(private service: DynamicComponentService, private data: DataTransferService) { }

  ngOnInit(): void {
  }

}
