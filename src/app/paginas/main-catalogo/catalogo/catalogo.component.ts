import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as data from '../recursos/productos.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadCatalogo(0);
  }

  loadCatalogo(contador: number){
    var contenedor = this.elementRef.nativeElement.querySelector('#contenedor-catalogo');
    $("div").remove(".example");

    let json: any = (data as any).default;
    console.log(json)
    let i: number;

    for(i=5; i>-1; i--){

      let j:number = contador*6 + i;

      let titulo = json[j].titulo
      let link = json[j].link
      let contenido = json[j].contenido
      let precio = json[j].precio
      let src = json[i].src

      console.log(json[j].titulo);

      let plantilla = `<div class="col-lg-4 col-md-6 mb-4 example">
      <div class="card h-100">
        <a routerLink=${link}><img class="card-img-top" src=${src} alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a routerLink=${link}>${titulo}</a>
          </h4>
          <h5>${precio}</h5>
          <p class="card-text">${contenido}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
      </div>
    </div>`

      contenedor.insertAdjacentHTML('afterbegin', plantilla);
    }
  }

}
