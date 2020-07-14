import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import * as data from '../../../assets/recursos-datos/posts.json';
import * as data2 from '../../../assets/recursos-datos/productos.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  introJS = introJs();

  constructor(private elementRef: ElementRef) { 
  }

  ngOnInit(): void {
    this.introJS.start();
  }

  ngAfterViewInit(): void {
    this.loadNoticias(0);
    this.loadCatalogo(0);
  }

  startSteps(){
    this.introJS.setOptions({
      steps: [
        {
          element: '#step1',
          intro: 'Welcome to your new app!',
          position: 'bottom'
        },
        {
          element: '#step2',
          intro: "Ok, wasn't that fun?",
          position: 'right'
        },
        {
          element: '#step3',
          intro: "let's keep going",
          position: 'top'
        },
        {
          element: '#step4',
          intro: 'More features, more fun.',
          position: 'right'
        },
        {
          element: '#step5',
          intro: 'More features, more fun.',
          position: 'right'
        },
        {
          element: '#step6',
          intro: 'More features, more fun.',
          position: 'right'
        },
        {
          element: '#step7',
          intro: 'More features, more fun.',
          position: 'right'
        },
        {
          element: '#step8',
          intro: 'More features, more fun.',
          position: 'right'
        },
        {
          element: '#step9',
          intro: 'More features, more fun.',
          position: 'right'
        },
        {
          element: '#step10',
          intro: 'More features, more fun.',
          position: 'right'
        },
        {
          element: '#step11',
          intro: 'More features, more fun.',
          position: 'right'
        }
      ],
      hidePrev: true,
      hideNext: false
    }).start();
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
