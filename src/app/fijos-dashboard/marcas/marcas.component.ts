import { Component, OnInit } from '@angular/core';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  showModal= false;
  showMListado=false;
  stepper: MatStepper;
  constructor() { }

  ngOnInit(): void {
  }
  showModel(){
    this.showModal = true;
  }
  showListado(){
    this.showMListado = true;
  }
  goForward(){
    this.stepper.next();
}
goBack(){
  this.stepper.previous();
}
}
