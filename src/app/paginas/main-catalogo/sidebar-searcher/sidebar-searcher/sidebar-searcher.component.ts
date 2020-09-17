import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { _Material } from 'src/app/paginas/servicios/Material';
import { MaterialService } from 'src/app/paginas/servicios/material.service';

@Component({
  selector: 'app-sidebar-searcher',
  templateUrl: './sidebar-searcher.component.html',
  styleUrls: ['./sidebar-searcher.component.scss']
})
export class SidebarSearcherComponent implements OnInit {

  listMateriales: Array<_Material> = new Array<_Material>()
  path: any;

  constructor(public mat: MaterialService, private router: Router) {
  }

  async ngOnInit() {
    this.listMateriales = await this.mat.getListMaterial();
  }

  goToResults(materialID:number){
    console.log("ID Enviado: " + materialID)
    this.path = ['/catalogo/child',{id: materialID},{outlets:{'child': 'result'}}];
    this.router.navigate(this.path);
  }

}
