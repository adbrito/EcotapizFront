import { Component, OnInit } from '@angular/core';
import { ItemObject } from '../../servicios/itemObject';
import { DataTransferCatalogoService } from '../../servicios/data-transfer-catalogo.service';
import { Router } from '@angular/router';
import { GenComponent } from '../../servicios/GenComponent';

@Component({
  selector: 'app-item-note',
  templateUrl: './item-note.component.html',
  styleUrls: ['./item-note.component.scss']
})
export class ItemNoteComponent extends GenComponent implements OnInit {

  postData: ItemObject;

  constructor(private data: DataTransferCatalogoService, private router: Router) {
    super();
    this.GenPost = new ItemObject
    this.GenData = new ItemObject
    this.postData = (<ItemObject> this.GenData)
    this.link = ['/catalogo/child',{outlets:{'child': 'detail'}}]
  }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => (<ItemObject> this.GenPost) = objectSource);
  }

  newObject(){
    this.data.changeObject(this.postData);
    this.router.navigate(this.link);
  }

}
