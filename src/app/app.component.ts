import { Component } from '@angular/core';
import { AeropuertoService } from './aeropuerto-service.service';
import { Aeropuerto } from './aeropuerto';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title: string = 'app';
  nameApp: string = 'Curso de Angular';
  
  constructor(private authService : AuthService){

  }
  
  isLogged(){
    return this.authService.isAuthenticated;
  }
  
  funcionClick(): void{
    alert("Clic en el nombre");
  }

}
