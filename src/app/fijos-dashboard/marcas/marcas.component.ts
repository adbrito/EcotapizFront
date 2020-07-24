import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  showModal= false;
  showMListado=false;
  constructor() { }

  ngOnInit(): void {
  }
  showModel(){
    this.showModal = true;
  }
  showListado(){
    this.showMListado = true;
  }
}
