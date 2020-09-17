import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemObject } from 'src/app/paginas/servicios/itemObject';
import { _Material } from 'src/app/paginas/servicios/Material';
import { MaterialService } from 'src/app/paginas/servicios/material.service';
import { ProductsHttpRequestService } from 'src/app/paginas/servicios/products-http-request.service';

@Component({
  selector: 'app-reporte-producto',
  templateUrl: './reporte-producto.component.html',
  styleUrls: ['./reporte-producto.component.css']
})
export class ReporteProductoComponent implements OnInit {

  listMateriales: Array<_Material> = new Array<_Material>()
  listProductos: Array<ItemObject> = new Array<ItemObject>()
  items:Array<Object> = new Array<Object>();
  selectedId: number;
  selected: number = -1;

  constructor(public mat: MaterialService, 
    private router: Router,
    private route: ActivatedRoute,
    public pro: ProductsHttpRequestService) { }

  async ngOnInit(){
    this.listMateriales = await this.mat.getListMaterial();
    console.log("ID Before: " + this.route.parent.snapshot.paramMap.get('id'))
    this.selectedId = Number(this.route.parent.snapshot.paramMap.get('id'))
    console.log("ID After: " + this.selectedId)
    this.items = await this.pro.getProductsById(this.selectedId)
  }

  async onOptionsSelected(){
    console.log("Seleccionado: " + this.selected)
    this.items = await this.pro.getProductsById(this.selected)
    
  }

}
