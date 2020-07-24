import { Component, OnInit, ElementRef, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewChildren, QueryList, ViewContainerRef, AfterContentInit, AfterViewChecked } from '@angular/core';
import * as data from '../../../../assets/recursos-datos/productos.json'
import { Router } from '@angular/router';
import { CatalogoDirective } from '../catalogo.directive';
import { CatalogoItemComponent } from '../catalogo-item/catalogo-item.component';
import { ItemObject } from '../itemObject';
import { DataTransferCatalogoService } from '../data-transfer-catalogo.service';
import { DynamicComponentService } from '../dynamic-component.service';
import { Catalogo2Directive } from '../catalogo2.directive';
import { Catalogo3Directive } from '../catalogo3.directive';
import { Catalogo4Directive } from '../catalogo4.directive';
import { Catalogo5Directive } from '../catalogo5.directive';
import { Catalogo6Directive } from '../catalogo6.directive';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit, AfterViewInit{

  items = [0, 0, 0, 0, 0, 0]
  contador = 0
  json: any 

  @ViewChildren (CatalogoDirective) catalogos: QueryList<CatalogoDirective>;

  @ViewChild (CatalogoDirective, {static: true}) appCatalogo: CatalogoDirective;
  @ViewChild (Catalogo2Directive, {static: true}) appCatalogo2: Catalogo2Directive;
  @ViewChild (Catalogo3Directive, {static: true}) appCatalogo3: Catalogo3Directive;
  @ViewChild (Catalogo4Directive, {static: true}) appCatalogo4: Catalogo4Directive;
  @ViewChild (Catalogo5Directive, {static: true}) appCatalogo5: Catalogo5Directive;
  @ViewChild (Catalogo6Directive, {static: true}) appCatalogo6: Catalogo6Directive;

  lista:ViewContainerRef[] = []

  itemObject: ItemObject
  constructor(private elementRef: ElementRef, private componentFactoryResolver: ComponentFactoryResolver,
              private data: DataTransferCatalogoService, private service: DynamicComponentService) { 
               
  }

  ngOnInit(): void {
    this.lista = [this.appCatalogo.viewContainerRef, this.appCatalogo2.viewContainerRef, this.appCatalogo3.viewContainerRef,
      this.appCatalogo4.viewContainerRef, this.appCatalogo5.viewContainerRef, this.appCatalogo6.viewContainerRef]
    this.lista.forEach(selector => selector.clear())
    this.contador = 0
    this.loadCatalogo()
    this.data.currentObject.subscribe(objectSource => this.itemObject = objectSource);
  }

  ngAfterViewInit(): void {
    //this.loadCatalogo()
  }

  loadCatalogo(){
    let i:number ;
    
    for(i=0; i<6; i++){

      let j:number = this.contador*6 + i;
      this.items[i] = j
    }
    
    this.lista.forEach(selector => this.loadComponent2(selector))
  }

  loadComponent2(catalogo: ViewContainerRef){
    this.json = (data as any).default;
    let object = this.json[this.contador]
    const viewContainerRef = catalogo;
    let componente = this.service.insertComponent(CatalogoItemComponent, viewContainerRef );
    (<CatalogoItemComponent> componente).defineAttributes(object);
    this.contador++;
  }

}
