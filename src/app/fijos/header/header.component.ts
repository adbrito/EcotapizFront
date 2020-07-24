import { Component, OnInit } from '@angular/core';
import { TextoService } from 'src/app/paginas/buscador/texto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  message = ''

  constructor(private data: TextoService, private router: Router) { 
    this.message = ""
  }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => this.message = objectSource)
  }

  onEnter(value: string){
    this.data.changeString(value)
    this.router.navigate(['/search/buscador',{outlets:{'buscador': 'main'}}]);
  }

  onClick(value: string){
    this.data.changeString(value)
    this.router.navigate(['/search/buscador',{outlets:{'buscador': 'main'}}]);
  }

}
