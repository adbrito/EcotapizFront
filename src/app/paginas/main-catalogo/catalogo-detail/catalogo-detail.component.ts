import { Component, OnInit } from '@angular/core';
import { ItemObject } from '../../servicios/itemObject';
import { DataTransferCatalogoService } from '../../servicios/data-transfer-catalogo.service';

@Component({
  selector: 'app-catalogo-detail',
  templateUrl: './catalogo-detail.component.html',
  styleUrls: ['./catalogo-detail.component.scss']
})
export class CatalogoDetailComponent implements OnInit {

  itemObject: ItemObject

  constructor(private data: DataTransferCatalogoService) { }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => this.itemObject = objectSource);
  }

}
