import { Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as data from './recursos/prueba.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit,AfterViewInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document) { 
    
  }
  ngAfterViewInit(): void {
    this.loadPost();
  }

  ngOnInit(): void {
    
  }

  loadPost(){
    var el = this.elementRef.nativeElement.querySelector('#d-post');

    let json: any = (data as any).default;
    let i: number;

    for(i=2; i>-1; i--){

      let nombre = json[i].titulo
      let autor = json[i].autor
      let contenido = json[i].contenido
      let fecha = json[i].fecha

      console.log(json[i].titulo);

      let plantilla = `<div class="card mb-4">
      <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
      <div class="card-body">
        <h2 class="card-title">${nombre}</h2>
        <p class="card-text">${contenido}</p>
        <a href="#" class="btn btn-primary">Read More &rarr;</a>
      </div>
      <div class="card-footer text-muted">
        Posted on ${fecha} by ${autor}
        <a href="#">Start Bootstrap</a>
      </div>
      </div>`

      el.insertAdjacentHTML('afterbegin', plantilla);
    
    }
  }
}
