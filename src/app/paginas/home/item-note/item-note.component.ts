import { Component, OnInit } from '@angular/core';
import * as products from '../../../../assets/recursos-datos/productos.json'
import { ItemObject } from '../../main-catalogo/itemObject';
import { DataTransferCatalogoService } from '../../main-catalogo/data-transfer-catalogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-note',
  templateUrl: './item-note.component.html',
  styleUrls: ['./item-note.component.scss']
})
export class ItemNoteComponent implements OnInit {

  postObject: ItemObject;
  postData: ItemObject;

  constructor(private data: DataTransferCatalogoService, private router: Router) {
    this.postData = new ItemObject
  }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => this.postObject = objectSource);
  }

  defineAttributes(itemObject: object){
    (<ItemObject>this.postData).defineAttributes(itemObject);  
  }

  newObject(){
    this.data.changeObject(this.postData);
    this.router.navigate(['/catalogo/child',{outlets:{'child': 'detail'}}]);
  }

}
