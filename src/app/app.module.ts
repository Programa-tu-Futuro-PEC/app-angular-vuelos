import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromedioFormComponent } from './promedio-form/promedio-form.component';
import { from } from 'rxjs';
import { HttpClientModule }    from '@angular/common/http';
import { DetalleAeropuertoComponent } from './detalle-aeropuerto/detalle-aeropuerto.component';
import { ListaAeropuertosComponent } from './lista-aeropuertos/lista-aeropuertos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AgregarAeropuertoComponent } from './agregar-aeropuerto/agregar-aeropuerto.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PromedioFormComponent,
    DetalleAeropuertoComponent,
    ListaAeropuertosComponent,
    AgregarAeropuertoComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
