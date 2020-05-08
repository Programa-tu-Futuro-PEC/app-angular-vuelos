import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleAeropuertoComponent } from './detalle-aeropuerto/detalle-aeropuerto.component';
import { ListaAeropuertosComponent } from './lista-aeropuertos/lista-aeropuertos.component';
import { AgregarAeropuertoComponent } from './agregar-aeropuerto/agregar-aeropuerto.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: '/aeropuertos', pathMatch:'full'},
  { path: 'login' , component:LoginComponent},
  { path: 'logout' , component:LogoutComponent},
  { path: 'aeropuertos', component:ListaAeropuertosComponent, canActivate: [AuthGuardService] },
  { path: 'detalle/:id', component: DetalleAeropuertoComponent, canActivate: [AuthGuardService] },
  { path: 'agregar', component: AgregarAeropuertoComponent, canActivate: [AuthGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
