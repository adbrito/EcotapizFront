import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disenio',
  templateUrl: './disenio.component.html',
  styleUrls: ['./disenio.component.css']
})
export class DisenioComponent implements OnInit {



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
