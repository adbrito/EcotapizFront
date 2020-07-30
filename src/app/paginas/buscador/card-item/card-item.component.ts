import { Component, OnInit } from '@angular/core';
import { ItemObject } from '../../servicios/itemObject';
import { DataTransferCatalogoService } from '../../servicios/data-transfer-catalogo.service';
import { Router } from '@angular/router';
import { CatalogoItemComponent } from '../../main-catalogo/catalogo-item/catalogo-item.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

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
