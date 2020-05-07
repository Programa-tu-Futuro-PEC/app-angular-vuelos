import { Component, OnInit, Input } from '@angular/core';
import { Aeropuerto } from '../aeropuerto';
import { AeropuertoService } from '../aeropuerto-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-aeropuerto',
  templateUrl: './detalle-aeropuerto.component.html',
  styleUrls: ['./detalle-aeropuerto.component.css']
})
export class DetalleAeropuertoComponent implements OnInit {

  @Input() aeropuerto: Aeropuerto;

  constructor(
    private aeropuertoService: AeropuertoService,
    private ruta: ActivatedRoute,
    private ubicacion: Location
    ) {}

  ngOnInit(): void {
    this.obtenerAeropuerto();
  }

  obtenerAeropuerto() {
    const id = +this.ruta.snapshot.paramMap.get('id');
    this.aeropuertoService.obtenerAeropuertoPorId(id)
      .subscribe(aeropuerto => this.aeropuerto=aeropuerto);
  }

  volver(){
    this.ubicacion.back();
  }

  guardar(id:number, nombre:string, pais:string, ciudad:string, iata:string, icao:string){
    this.aeropuertoService.modificarAeropuerto({id, nombre, pais, ciudad, iata, icao} as Aeropuerto)
      .subscribe(_=>this.volver());
  }

}
