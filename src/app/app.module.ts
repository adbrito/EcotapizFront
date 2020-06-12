import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fijos/header/header.component';
import { FooterComponent } from './fijos/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { SimuladorComponent } from './paginas/simulador/simulador.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { BlogComponent } from './paginas/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SimuladorComponent,
    CatalogoComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
