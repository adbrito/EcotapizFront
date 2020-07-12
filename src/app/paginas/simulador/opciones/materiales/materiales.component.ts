import { Component, OnInit } from '@angular/core';
import{SimuladorService} from 'src/app/paginas/simulador/servicios/simulador.service';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {
  materiales=[];
  tipos=[];
  simuladorService;
  constructor(simuladorService:SimuladorService) { 

  }

  ngOnInit(): void {
    SimuladorService.getTiposMateriales((datos)=> {
      console.log(datos);
      this.tipos=datos;
    });

    this.llenarDatos("Todos");
    
  }

  llenarDatos(filtro:string){
    SimuladorService.getMateriales(filtro,(datos)=> {
      this.materiales=datos;
      console.log(this.materiales);
    });
    

  }

  ordenar(filtro:string){
    console.log("entro aqui");
    if (filtro==="Mejor"){      
      SimuladorService.ordenarRankin(this.materiales);
    }else{
     SimuladorService.ordenarNombre(this.materiales);
    }
  }

}
