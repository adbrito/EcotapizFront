import { Component, OnInit} from '@angular/core';
import { ItemObject } from '../../servicios/itemObject';
import { Router } from '@angular/router';
import { DataTransferCatalogoService } from '../../servicios/data-transfer-catalogo.service';
import { GenComponent } from '../../servicios/GenComponent';

@Component({
  selector: 'app-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styleUrls: ['./catalogo-item.component.scss']
})
export class CatalogoItemComponent extends GenComponent implements OnInit{

  postData: ItemObject;

  constructor(private data: DataTransferCatalogoService, private router: Router) { 
    super()
    this.GenPost = new ItemObject
    this.GenData = new ItemObject
    this.postData = (<ItemObject> this.GenData)
    this.link = ['/catalogo/child',{outlets:{'child': 'detail'}}]
  }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => (<ItemObject> this.GenPost) = objectSource);
  }

  newObject(){
    this.data.changeObject((<ItemObject> this.GenData));
    this.router.navigate(this.link);
  }

}
