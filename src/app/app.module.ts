import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromedioFormComponent } from './promedio-form/promedio-form.component';
import { from } from 'rxjs';
import { HttpClientModule }    from '@angular/common/http';
import { DetalleAeropuertoComponent } from './detalle-aeropuerto/detalle-aeropuerto.component';
import { ListaAeropuertosComponent } from './lista-aeropuertos/lista-aeropuertos.component';

@NgModule({
  declarations: [
    AppComponent,
    PromedioFormComponent,
    DetalleAeropuertoComponent,
    ListaAeropuertosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
