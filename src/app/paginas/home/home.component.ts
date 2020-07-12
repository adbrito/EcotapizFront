import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as data from '../main-blog/recursos/posts.json';
import * as data2 from '../main-catalogo/recursos/productos.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadNoticias(0);
    this.loadCatalogo(0);
  }

  loadNoticias(contador: number){
    var contenedor = this.elementRef.nativeElement.querySelector('#contenedor-noticias');
    $("div").remove(".example");

    let json: any = (data as any).default;
    let i: number;

    for(i=2; i>-1; i--){

      let j:number = contador*3 + i;

      let nombre = json[j].titulo
      let autor = json[j].autor
      let contenido = json[j].contenido
      let fecha = json[j].fecha
      let src = json[i].src

      console.log(json[j].titulo);

      let plantilla = `<div class="col-lg-4 mb-4 example">
      <div class="card h-100">
        <h4 class="card-header">${nombre}</h4>
        <div class="card-body">
          <p class="card-text">${contenido}</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">Ir a post</a>
        </div>
      </div>
    </div>`

      contenedor.insertAdjacentHTML('afterbegin', plantilla);
    }
  }

  loadCatalogo(contador: number){
    var contenedor = this.elementRef.nativeElement.querySelector('#contenedor-catalogo');
    $("div").remove(".example2");

    let json: any = (data2 as any).default;
    console.log(json)
    let i: number;

    for(i=5; i>-1; i--){

      let j:number = contador*6 + i;

      let titulo = json[j].titulo
      let link = json[j].link
      let contenido = json[j].contenido
      let src = json[i].src

      console.log(json[j].titulo);

      let plantilla = `<div class="col-lg-4 col-sm-6 portfolio-item pb-4 example2">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src=${src} alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">${titulo}</a>
          </h4>
          <p class="card-text">${contenido}</p>
        </div>
      </div>
    </div>`

      contenedor.insertAdjacentHTML('afterbegin', plantilla);
    }
  }
}
