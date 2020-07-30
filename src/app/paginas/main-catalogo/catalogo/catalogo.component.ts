import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef} from '@angular/core';
import { CatalogoDirective } from '../catalogo.directive';
import { CatalogoItemComponent } from '../catalogo-item/catalogo-item.component';
import { ItemObject } from '../../servicios/itemObject';
import { DataTransferCatalogoService } from '../../servicios/data-transfer-catalogo.service';
import { Catalogo2Directive } from '../catalogo2.directive';
import { Catalogo3Directive } from '../catalogo3.directive';
import { Catalogo4Directive } from '../catalogo4.directive';
import { Catalogo5Directive } from '../catalogo5.directive';
import { Catalogo6Directive } from '../catalogo6.directive';
import { CreateAnyComponentService } from '../../servicios/create-any-component.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit{

  @ViewChild (CatalogoDirective, {static: true}) appCatalogo: CatalogoDirective;
  @ViewChild (Catalogo2Directive, {static: true}) appCatalogo2: Catalogo2Directive;
  @ViewChild (Catalogo3Directive, {static: true}) appCatalogo3: Catalogo3Directive;
  @ViewChild (Catalogo4Directive, {static: true}) appCatalogo4: Catalogo4Directive;
  @ViewChild (Catalogo5Directive, {static: true}) appCatalogo5: Catalogo5Directive;
  @ViewChild (Catalogo6Directive, {static: true}) appCatalogo6: Catalogo6Directive;

  lista:ViewContainerRef[] = []

  itemObject: ItemObject
  constructor(private data: DataTransferCatalogoService, private service: CreateAnyComponentService) { 
               
  }

  ngOnInit(): void {
    this.lista = [this.appCatalogo.viewContainerRef, this.appCatalogo2.viewContainerRef, this.appCatalogo3.viewContainerRef,
      this.appCatalogo4.viewContainerRef, this.appCatalogo5.viewContainerRef, this.appCatalogo6.viewContainerRef]
    this.lista.forEach(selector => selector.clear())
    this.service.createManyComponentsManyViews(CatalogoItemComponent, this.lista, 6, 0, "ItemObject")
    this.data.currentObject.subscribe(objectSource => this.itemObject = objectSource);
  }
  
}
