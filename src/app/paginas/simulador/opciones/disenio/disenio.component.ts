import { Component, OnInit } from '@angular/core';
import { SimuladorService } from 'src/app/paginas/simulador/servicios/simulador.service';


@Component({
  selector: 'app-disenio',
  templateUrl: './disenio.component.html',
  styleUrls: ['./disenio.component.css']
})
export class DisenioComponent implements OnInit {
  disenios = [];
  tipos = [];
  simuladorService;
  constructor(simuladorService: SimuladorService) {

  }

  ngOnInit(): void {
    SimuladorService.getTiposDisenios((datos) => {
      console.log(datos);
      this.tipos = datos;
    });

    this.llenarDatos("Todos");

  }

  llenarDatos(filtro: string) {
    SimuladorService.getDisenios(filtro, (datos) => {
      this.disenios = datos;
    });
    console.log(this.disenios);


  }

  ordenar(filtro: string) {
    console.log("entro aqui");
    if (filtro === "Mejor") {
      SimuladorService.ordenarRankin(this.disenios);
    } else {
      SimuladorService.ordenarNombre(this.disenios);
    }
  }
}
