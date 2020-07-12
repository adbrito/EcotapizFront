import { Component, OnInit } from '@angular/core';
import { SimuladorService } from 'src/app/paginas/simulador/servicios/simulador.service';


@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {
  autos = [];
  tipos = [];
  simuladorService;
  constructor(simuladorService: SimuladorService) {

  }

  ngOnInit(): void {
    SimuladorService.getTiposAutos((datos) => {
      console.log(datos);
      this.tipos = datos;
    });

    this.llenarDatos("Todos");

  }

  llenarDatos(filtro: string) {
    SimuladorService.getAutos(filtro, (datos) => {
      this.autos = datos;
    });
    console.log(this.autos);


  }

  ordenar(filtro: string) {
    console.log("entro aqui");
    if (filtro === "Mejor") {
      SimuladorService.ordenarRankin(this.autos);
    } else {
      SimuladorService.ordenarNombre(this.autos);
    }
  }
}
