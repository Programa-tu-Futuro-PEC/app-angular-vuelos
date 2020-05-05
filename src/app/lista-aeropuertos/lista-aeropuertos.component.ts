import { Component, OnInit } from '@angular/core';
import { Aeropuerto } from '../aeropuerto';
import { AeropuertoService } from '../aeropuerto-service.service';

@Component({
  selector: 'app-lista-aeropuertos',
  templateUrl: './lista-aeropuertos.component.html',
  styleUrls: ['./lista-aeropuertos.component.css']
})
export class ListaAeropuertosComponent implements OnInit {

  aeropuertos: Aeropuerto[];

  constructor(private aeropuertoService: AeropuertoService){}

  ngOnInit(){
    this.obtenerAeropuertos();
  }

  obtenerAeropuertos() {
    this.aeropuertoService.obtenerAeropuertos()
      .subscribe(aeropuertos => this.aeropuertos=aeropuertos);
  }

}
