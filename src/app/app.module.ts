import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fijos/header/header.component';
import { FooterComponent } from './fijos/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AcercaNosotrosComponent } from './paginas/acerca-nosotros/acerca-nosotros.component';

import  {  SimuladorModule  }      from  './paginas/simulador/simulador.module' ;  // <- importar


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    AcercaNosotrosComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    SimuladorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
