import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleAeropuertoComponent } from './detalle-aeropuerto/detalle-aeropuerto.component';
import { ListaAeropuertosComponent } from './lista-aeropuertos/lista-aeropuertos.component';
import { AgregarAeropuertoComponent } from './agregar-aeropuerto/agregar-aeropuerto.component';


const routes: Routes = [
  { path: '', redirectTo: '/aeropuertos', pathMatch:'full'},
  { path:'aeropuertos', component:ListaAeropuertosComponent},
  { path: 'detalle/:id', component: DetalleAeropuertoComponent },
  { path: 'agregar', component: AgregarAeropuertoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
