import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import * as data from '../../../assets/recursos-datos/posts.json';
import * as data2 from '../../../assets/recursos-datos/productos.json';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  introJS = introJs();

  constructor(private elementRef: ElementRef) { 
  }

  ngOnInit(): void {
    this.introJS.start();
  }

  ngAfterViewInit(): void {
  }

  startSteps(){
    this.introJS.setOptions({
      steps: [
        {
          element: '#step1',
          intro: 'Bienvenidos a Ecotapiz, sere su guia por este sitio',
          position: 'bottom'
        },
        {
          element: '#step2',
          intro: "En esta seccion, se presentara las noticias mas destacadas sobre el mundo del tapizado",
          position: 'right'
        },
        {
          element: '#step3',
          intro: "Aqui le mostraremos los productos mas solicitados por nuestros compradores",
          position: 'top'
        },
        {
          element: '#step4',
          intro: 'Aqui encuentras la informacion de lo que puedes hacer en el sitio web',
          position: 'right'
        },
        {
          element: '#step5',
          intro: 'Al presionar esta opcion, se dirigirá a nuestra pagina de contacto, donde podra ver nuestra ubicacion y dejarnos sus mensajes',
          position: 'right'
        },
        {
          element: '#step6',
          intro: 'Al seleccionar este menu desplegable, le aparecera tres opciones donde podra ir nuestra pagina principal, ir a la informacion de nuestra empresa e dirigirse a la seccion de contacto.',
          position: 'right'
        },
        {
          element: '#step7',
          intro: 'Al presionar, se dirigira a la seccion de simulacion, donde podra modelar su tapizado de carro, segun su preferencia.',
          position: 'right'
        },
        {
          element: '#step8',
          intro: 'En esta opcion, podra ver el listado de productos que ofrecemos',
          position: 'right'
        },
        {
          element: '#step9',
          intro: 'Aqui encontrara las noticias sobre promociones, y eventos pasados de nuestra compañia, ademas sobre informacion del mundo del tapizado ',
          position: 'right'
        },
        {
          element: '#step10',
          intro: 'Aqui al estar sobre el boton de buscar, le aparecera un recuadro que le permitira escribir lo que desea buscar en el sitio web',
          position: 'right'
        },
        {
          element: '#step11',
          intro: 'Esta opcion solo es para los administradores del sitio, y solo podra iniciar sesion si cuenta con un usuario y contraseña',
          position: 'right'
        }
      ],
      hidePrev: true,
      hideNext: false
    }).start();
  }

}
