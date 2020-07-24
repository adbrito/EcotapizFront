import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-simulador',
  templateUrl: './nav-simulador.component.html',
  styleUrls: ['./nav-simulador.component.scss']
})
export class NavSimuladorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){
    $(".clickeable").click(function(e){
      $(".activo").removeClass('activo').addClass( "clickeable" ); 
      $(this).removeClass( "clickeable" ).addClass( "activo" );
  });
  }
}
