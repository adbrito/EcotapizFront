import { Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as data from '../recursos/posts.json';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit,AfterViewInit {

  contador: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document) { 
    
  }
  ngAfterViewInit(): void {
    this.loadPost(this.contador);
  }

  ngOnInit(): void {
    
  }

  loadPost(contador: number){
    var contenedor = this.elementRef.nativeElement.querySelector('#d-post');
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

      let plantilla = `<div class="card mb-4 example" >
      <img class="card-img-top" src=${src} alt="Card image cap">
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

      contenedor.insertAdjacentHTML('afterbegin', plantilla);
    }
  }
}