import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

 

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
