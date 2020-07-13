import { Injectable } from '@angular/core';
import {VistaPrevComponent} from 'src/app/paginas/simulador/vista-prev/vista-prev.component'

@Injectable({
  providedIn: 'root'
})
export class SimuladorService {
  public static pathDatos: string = 'assets/datos/';
  public  simulacion = {
    auto: null,
    disenio: null,
    materiales: [],

  }
 



  constructor( ) { 
  }


  public  addAuto(auto){
    this.simulacion.auto=auto;
    VistaPrevComponent.cambiarObjeto(auto.gltf);
  }
  public  addMaterial( material){
    this.simulacion.materiales.push(material);
    VistaPrevComponent.cambiarMaterial(material);
  }

  public static getMateriales(busqueda: string, cb) {
    let retorno = [];
    return fetch(this.pathDatos + 'materiales.json').then(function (response) {

      return response.json();

    }).then(function (json) {

      let { materiales } = json;
      for (let i = 0; i < materiales.length; i++) {
        let { descripcion } = materiales[i];
        if (descripcion.indexOf(busqueda) !== -1 || busqueda === "Todos") {
          retorno.push(materiales[i]);
        }
      }
      console.log(retorno)
      cb(retorno);
    }).catch(function (error) {
      console.log('error' + error.message);
      cb([]);
    });
  }

  public static getDisenios(busqueda: string, cb) {
    let retorno = [];
    return fetch(this.pathDatos + 'disenios.json').then(function (response) {

      return response.json();

    }).then(function (json) {

      let { disenios } = json;
      for (let i = 0; i < disenios.length; i++) {
        let { descripcion } = disenios[i];
        if (descripcion.indexOf(busqueda) !== -1 || busqueda === "Todos") {
          retorno.push(disenios[i]);
        }
      }
      console.log(retorno)
      cb(retorno);
    }).catch(function (error) {
      console.log('error' + error.message);
      cb([]);
    });
  }



  public static getAutos(busqueda: string, cb) {
    let retorno = [];
    return fetch(this.pathDatos + 'autos.json').then(function (response) {

      return response.json();

    }).then(function (json) {

      let { autos } = json;
      for (let i = 0; i < autos.length; i++) {
        let { descripcion } = autos[i];
        if (descripcion.indexOf(busqueda) !== -1 || busqueda === "Todos") {
          retorno.push(autos[i]);
        }
      }
      console.log(retorno)
      cb(retorno);
    }).catch(function (error) {
      console.log('error' + error.message);
      cb([]);
    });
  }

  public static getTiposMateriales(cb) {
    return fetch(this.pathDatos + 'tiposMateriales.json').then(function (response) {
      return response.json();
    }).then(function (lista) {
      const { tipos } = lista;
      cb(tipos);
    }).catch(function (error) {
      console.log('error' + error.message);
      cb([]);
    });
  }

  public static getTiposAutos(cb) {
    return fetch(this.pathDatos + 'tiposAutos.json').then(function (response) {
      return response.json();
    }).then(function (lista) {
      const { tipos } = lista;
      cb(tipos);
    }).catch(function (error) {
      console.log('error' + error.message);
      cb([]);
    });
  }
  public static getTiposDisenios(cb) {
    return fetch(this.pathDatos + 'tiposDisenios.json').then(function (response) {
      return response.json();
    }).then(function (lista) {
      const { tipos } = lista;
      cb(tipos);
    }).catch(function (error) {
      console.log('error' + error.message);
      cb([]);
    });
  }




  public static ordenarNombre(lista) {

    return lista.sort(function (a, b) {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      return 0;
    });
  }

  public static ordenarRankin(lista) {

    return lista.sort(function (a, b) {
      return a.rankin - b.rankin;
    });
  }
}
