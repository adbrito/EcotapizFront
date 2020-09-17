import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CreateAnyComponentService } from '../../servicios/create-any-component.service';
import { DataTransferCatalogoService } from '../../servicios/data-transfer-catalogo.service';
import { ItemObject } from '../../servicios/itemObject';
import { ProductsHttpRequestService } from '../../servicios/products-http-request.service';
import { CatalogoItemComponent } from '../catalogo-item/catalogo-item.component';
import { CatalogoDirective } from '../catalogo.directive';
import { Catalogo2Directive } from '../catalogo2.directive';
import { Catalogo3Directive } from '../catalogo3.directive';
import { Catalogo4Directive } from '../catalogo4.directive';
import { Catalogo5Directive } from '../catalogo5.directive';
import { Catalogo6Directive } from '../catalogo6.directive';

@Component({
  selector: 'app-catalogo-result',
  templateUrl: './catalogo-result.component.html',
  styleUrls: ['./catalogo-result.component.scss']
})
export class CatalogoResultComponent implements OnInit {

  @ViewChild (CatalogoDirective, {static: true}) appCatalogo: CatalogoDirective;
  @ViewChild (Catalogo2Directive, {static: true}) appCatalogo2: Catalogo2Directive;
  @ViewChild (Catalogo3Directive, {static: true}) appCatalogo3: Catalogo3Directive;
  @ViewChild (Catalogo4Directive, {static: true}) appCatalogo4: Catalogo4Directive;
  @ViewChild (Catalogo5Directive, {static: true}) appCatalogo5: Catalogo5Directive;
  @ViewChild (Catalogo6Directive, {static: true}) appCatalogo6: Catalogo6Directive;

  lista:ViewContainerRef[] = []

  selectedId: number;
  itemObject: ItemObject;
  listResult:Array<Object> = new Array<Object>();

  constructor(private route: ActivatedRoute,
    private data: DataTransferCatalogoService, 
    private service: CreateAnyComponentService,
    public pro: ProductsHttpRequestService) { 
   
  }

  async ngOnInit(){
    console.log("ID Before: " + this.route.parent.snapshot.paramMap.get('id'))
    this.selectedId = Number(this.route.parent.snapshot.paramMap.get('id'))
    console.log("ID After: " + this.selectedId)
    this.listResult = await this.pro.getProductsListBySearch(this.selectedId)
    if(this.listResult.length > 0){
      this.lista = [this.appCatalogo.viewContainerRef, this.appCatalogo2.viewContainerRef, this.appCatalogo3.viewContainerRef,
      this.appCatalogo4.viewContainerRef, this.appCatalogo5.viewContainerRef, this.appCatalogo6.viewContainerRef]
      this.lista.forEach(selector => selector.clear())
      this.service.createUsingList(CatalogoItemComponent, this.lista, this.listResult.length, 0, "ItemObject",this.listResult)
      this.data.currentObject.subscribe(objectSource => this.itemObject = objectSource);
    }
  }

}
