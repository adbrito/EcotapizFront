import { Component, OnInit } from '@angular/core';
import {GrafBarraService} from 'src/app/paginas/servicios/graf-barra.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Object;
// private chartData = [
//       {
//         label: "Enero",
//         value: "90"
//       },
//       {
//         label: "Febrero",
//         value: "260"
//       },
//       {
//         label: "Marzo",
//         value: "180"
//       },
//       {
//         label: "Abril",
//         value: "140"
//       },
//       {
//         label: "Mayo",
//         value: "115"
//       },
//       {
//         label: "Junio",
//         value: "100"
//       },
//       {
//         label: "Julio",
//         value: "30"
//       },
//       {
//         label: "Agosto",
//         value: "30"
//       },
//       {
//         label: "Septiembre",
//         value: "130"
//       },
//       {
//         label: "Octubre",
//         value: "170"
//       },
//       {
//         label: "Noviembre",
//         value: "190"
//       },
//       {
//         label: "Diciembre",
//         value: "210"
//       }
//     ];

private chartData:any;

  constructor(
private graficaBarra: GrafBarraService
    ) {  //STEP 2 - Chart Data
    //this.graficoBarras();
    this.visualizarGraf();
  }

  private graficoBarras(){

    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "Cotizaciones realizadas durante el año 2020",
        //Set the chart subcaption
        //subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "Meses",
        //Set the y-axis name
        yAxisName: "Cotizaciones",
        numberSuffix: "U",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: this.chartData
    };
         // console.log(this.chartData);

    this.dataSource = dataSource;
  }


  private visualizarGraf(){
    this.graficaBarra.getNCotizacion().subscribe(data =>{
    //console.log("data primera",data, typeof(data),typeof([data]));
    //console.log("lo que me manda el server",data);
   this.chartData=data;
   //console.log(this.cotizacion.data);
this.graficoBarras();
      },(error)=>{
        console.error(error);
      }) 
  }

/*
constructor(){
  this.graficoBarras()
}

graficoBarras(){
  //dataSource: Object;

  const chartData = [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ];
  // STEP 3 - Chart Configuration
  const dataSource = {
    chart: {
      //Set the chart caption
      caption: "Countries With Most Oil Reserves [2017-18]",
      //Set the chart subcaption
      subCaption: "In MMbbl = One Million barrels",
      //Set the x-axis name
      xAxisName: "Country",
      //Set the y-axis name
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data - from step 2
    data: chartData
  };
  this.dataSource = dataSource;

}*/
  ngOnInit(): void {
  }

}
