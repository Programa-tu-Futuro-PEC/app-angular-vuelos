import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleAeropuertoComponent } from './detalle-aeropuerto/detalle-aeropuerto.component';
import { ListaAeropuertosComponent } from './lista-aeropuertos/lista-aeropuertos.component';


const routes: Routes = [
  { path: '', redirectTo: '/aeropuertos', pathMatch:'full'},
  { path:'aeropuertos', component:ListaAeropuertosComponent},
  { path: 'detalle/:id', component: DetalleAeropuertoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
