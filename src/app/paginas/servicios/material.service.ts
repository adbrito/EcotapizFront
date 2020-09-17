import { Injectable } from '@angular/core';
import { _Material } from './Material';
import { MaterialHTTPService } from './material-http.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(public mat: MaterialHTTPService) { }

  async getListMaterial(){
    let materiales:Array<_Material> = new Array<_Material>();
    let results = await this.mat.getMateriales()
    results.forEach((objeto) =>{
      let temp = new _Material()
      temp.defineAttributes(objeto)
      materiales.push(temp)
    })
    return materiales
  }
}
