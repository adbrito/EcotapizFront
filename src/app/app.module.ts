import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fijos/header/header.component';
import { FooterComponent } from './fijos/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';


import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AcercaNosotrosComponent } from './paginas/acerca-nosotros/acerca-nosotros.component';

import  {  SimuladorModule  }      from  './paginas/simulador/simulador.module';
import { BlogNoteComponent } from './paginas/home/blog-note/blog-note.component';
import { ItemNoteComponent } from './paginas/home/item-note/item-note.component';
import { PostContainerComponent } from './paginas/home/post-container/post-container.component';
import { ItemContainerComponent } from './paginas/home/item-container/item-container.component' ;  // <- importar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;  // <- importar

import { 
  MatStepperModule
} from '@angular/material/stepper';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { MainCatalogoModule } from './paginas/main-catalogo/main-catalogo.module';

import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {ContactService} from '../app/paginas/servicios/contact.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    AcercaNosotrosComponent,
    BlogNoteComponent,
    ItemNoteComponent,
    PostContainerComponent,
    ItemContainerComponent
  ],
  imports: [ 
    BrowserModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    SimuladorModule,
    MatStepperModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MainCatalogoModule,
    HttpClientModule,
    FormsModule,
    CommonModule
      ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
