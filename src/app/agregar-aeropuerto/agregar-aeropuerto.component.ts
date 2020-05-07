import { Component, OnInit } from '@angular/core';
import { AeropuertoService } from '../aeropuerto-service.service';
import { Aeropuerto } from '../aeropuerto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-aeropuerto',
  templateUrl: './agregar-aeropuerto.component.html',
  styleUrls: ['./agregar-aeropuerto.component.css']
})
export class AgregarAeropuertoComponent implements OnInit {

  constructor(private aeropuertoService: AeropuertoService,
    private ubicacion: Location) { }

  ngOnInit(): void {
  }

  guardarAeropuerto(nombre: string, pais:string, ciudad:string): void{
    if(!nombre.trim()){
      alert("Nombre vacío");
      return;
    } if (!pais.trim()){
      alert("País vacío");
      return;
    } if (!ciudad.trim()){
      alert("Ciudad vacía");
      return;
    }
    this.aeropuertoService.guardarAeropuerto({nombre, pais, ciudad} as Aeropuerto)
      .subscribe(_=> this.volver());
  }

  volver(): void{
    this.ubicacion.back();
  }

}
