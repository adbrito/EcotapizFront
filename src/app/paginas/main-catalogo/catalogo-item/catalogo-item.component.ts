import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ItemObject } from '../itemObject';
import { Router } from '@angular/router';
import { DataTransferCatalogoService } from '../data-transfer-catalogo.service';

@Component({
  selector: 'app-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styleUrls: ['./catalogo-item.component.css']
})
export class CatalogoItemComponent implements OnInit{

  postObject: ItemObject;
  postData: ItemObject;

  constructor(private data: DataTransferCatalogoService, private router: Router, private cdRef:ChangeDetectorRef) { 
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
