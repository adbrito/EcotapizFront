import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fijos/header/header.component';
import { FooterComponent } from './fijos/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import  {  SimuladorModule  }      from  './paginas/simulador/simulador.module' ;  // <- importar


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogoComponent,
    BlogComponent,
    ContactoComponent,
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
