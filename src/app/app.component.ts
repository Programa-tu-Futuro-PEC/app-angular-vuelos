import { Component } from '@angular/core';
import { AeropuertoService } from './aeropuerto-service.service';
import { Aeropuerto } from './aeropuerto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  nameApp: string = 'Curso de Angular';
  funcionClick(): void{
    alert("Clic en el nombre");
  }

}
