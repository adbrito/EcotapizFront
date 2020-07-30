import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ItemObject } from '../../servicios/itemObject';
import { CatalogoDirective } from '../../main-catalogo/catalogo.directive';
import { Catalogo2Directive } from '../../main-catalogo/catalogo2.directive';
import { Catalogo3Directive } from '../../main-catalogo/catalogo3.directive';
import { Catalogo4Directive } from '../../main-catalogo/catalogo4.directive';
import { Catalogo5Directive } from '../../main-catalogo/catalogo5.directive';
import { Catalogo6Directive } from '../../main-catalogo/catalogo6.directive';
import { DataTransferCatalogoService } from '../../servicios/data-transfer-catalogo.service';
import { ItemNoteComponent } from '../item-note/item-note.component';
import { CreateAnyComponentService } from '../../servicios/create-any-component.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  lista:ViewContainerRef[] = []
  itemObject: ItemObject

  @ViewChild (CatalogoDirective, {static: true}) item1: CatalogoDirective;
  @ViewChild (Catalogo2Directive, {static: true}) item2: Catalogo2Directive;
  @ViewChild (Catalogo3Directive, {static: true}) item3: Catalogo3Directive;
  @ViewChild (Catalogo4Directive, {static: true}) item4: Catalogo4Directive;
  @ViewChild (Catalogo5Directive, {static: true}) item5: Catalogo5Directive;
  @ViewChild (Catalogo6Directive, {static: true}) item6: Catalogo6Directive;

  constructor(private data: DataTransferCatalogoService, private service: CreateAnyComponentService) { }

  ngOnInit(): void {
    this.lista = [this.item1.viewContainerRef, this.item2.viewContainerRef, this.item3.viewContainerRef,
      this.item4.viewContainerRef,this.item5.viewContainerRef,this.item6.viewContainerRef,]
    this.lista.forEach(selector => selector.clear())
    this.service.createManyComponentsManyViews(ItemNoteComponent, this.lista, 6, 0, "ItemObject")
    this.data.currentObject.subscribe(objectSource => this.itemObject = objectSource);
  }

}
