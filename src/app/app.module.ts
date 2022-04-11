import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  HttpClientModule } from '@angular/common/http';

//Componenetes
import { ListarPersonajeComponent } from './componentes/listar-personaje/listar-personaje.component';
import { CardPersonajeComponent } from './componentes/card-personaje/card-personaje.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarPersonajeComponent,
    CardPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
