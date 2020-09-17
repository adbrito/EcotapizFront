import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {PlanoService} from 'src/app/paginas/servicios/plano.service';



@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.css']
})
export class PlanoComponent implements OnInit {

	// private data = [
 //    {"Framework": "Vue", "Stars": "166443", "Released": "1"},
 //    {"Framework": "React", "Stars": "150793", "Released": "3"},
 //    {"Framework": "Angular", "Stars": "62342", "Released": "9"},
 //    {"Framework": "Backbone", "Stars": "27647", "Released": "10"},
 //    {"Framework": "Ember", "Stars": "21471", "Released": "11"},
 //  ];
 private data: any;
  private svg;
  private margin = 40;
  private width = 350 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

private createSvg(): void {
    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
    .domain([0, 12])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 10000])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
    .data(this.data)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.Mes))
    .attr("cy", d => y(d.Total))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "#69b3a2");

    // Add labels
    dots.selectAll("text")
    .data(this.data)
    .enter()
    .append("text")
    .text(d => d.Total)
    .attr("x", d => x(d.Mes))
    .attr("y", d => y(d.Total))
}
ngOnInit(): void {
    // this.createSvg();
    // this.drawPlot();
    this.llenarGrafico();
}


private llenarGrafico(){
  this.planoService.getGrafico().subscribe(data =>{
    //console.log("data primera",data, typeof(data),typeof([data]));
    console.log("lo que me manda el server",data);
    this.data=data;
    console.log("traspasando",this.data);
this.createSvg();
     this.drawPlot();
   //console.log(this.cotizacion.data);

      },(error)=>{
        console.error(error);
      }) 
  
}



  constructor(
      private planoService:PlanoService
      ) { }

 

}
