import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { DashboardComponent}  from '../dashboard/dashboard.component';
import {PieService} from 'src/app/paginas/servicios/pie.service';
//import {Cotizacion} from '../pie/cotizacion';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  /*d3 = d3();*/
  //@ViewChild('radioBox') elemento: DashboardComponent;
  @ViewChild('circulo') elemento: PieComponent;
  //private dato:Array<Cotizacion>;
   //  private dato = [
   //   { "id": "Vue", "Stars": "166443", "subtotal": "2014" },
   //   { "id": "React", "Stars": "150793", "subtotal": "2013" },
   //   { "id": "Angular", "Stars": "62342", "subtotal": "2016" },
   //   { "id": "Backbone", "Stars": "27647", "subtotal": "2010" },
   //   { "id": "Ember", "Stars": "21471", "subtotal": "2011" },
   // ];
  private svg;
  private margin = 40;
  //private width=this.elemento.ngOnInit.prototype.width;
  private width = 350;
  private height = 200;
  cotizacion:any;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;


  private createSvg(): void {
    this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }

  private createColors(): void {


    console.log(this.getRandomColor());

    this.colors = d3.scaleOrdinal()
      .domain(this.cotizacion.map(d => d.totalCotizacion.toString()))
      .range(this.getRandomColor());
      //.range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }


 private getRandomColor() {
   var colores=[];
   for (var i = this.cotizacion.length - 1; i >= 0; i--) {
     var color = Math.floor(0x1000000 * Math.random()).toString(16);
    //return '#' + ('000000' + color).slice(-6);
    var colorG='#' + ('000000' + color).slice(-6);
     colores.push(colorG);
   
   }
   return colores; 
  }





  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.totalCotizacion));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.cotizacion))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d, i) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(80)
      .outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.cotizacion))
      .enter()
      .append('text')
      .text(d => d.data.cliente +" valor: $"+ d.data.totalCotizacion)
      .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
   console.log("deberia salir el datoo",this.cotizacion)   
   //console.log(this.dato);
  }







private llenarPie(){
  this.pieService.getCotizacion().subscribe(data =>{
    //console.log("data primera",data, typeof(data),typeof([data]));
    console.log("lo que me manda el server",data);
    this.cotizacion=data;
    console.log("traspasando",this.cotizacion);
this.createSvg();
     this.createColors();
     this.drawChart();
   //console.log(this.cotizacion.data);

      },(error)=>{
        console.error(error);
      }) 
  
}


  constructor(
    private pieService:PieService
    ) { }

  ngOnInit(): void {

    this.llenarPie();
    // this.createSvg();
    // this.createColors();
    // this.drawChart();
  }

}
