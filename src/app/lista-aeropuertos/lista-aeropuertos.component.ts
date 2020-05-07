import { Component, OnInit, OnDestroy } from '@angular/core';
import { Aeropuerto } from '../aeropuerto';
import { AeropuertoService } from '../aeropuerto-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-lista-aeropuertos',
  templateUrl: './lista-aeropuertos.component.html',
  styleUrls: ['./lista-aeropuertos.component.css']
})
export class ListaAeropuertosComponent implements OnInit ,OnDestroy{

  aeropuertos: Aeropuerto[];
  displayedColumns: string[] = ['id','nombre','ciudad','pais','detalle', 'borrar'];
  mySubscription:any;

  constructor( private router: Router, private aeropuertoService: AeropuertoService){

    this.router.routeReuseStrategy.shouldReuseRoute = function () {

      return false;
    
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      
    if (event instanceof NavigationEnd) {
    
        // Trick the Router into believing it's last link wasn't previously loaded
    
        this.router.navigated = false;
           
    }
    
    });

  }
  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();

    }
  }

  ngOnInit(){
    this.obtenerAeropuertos();
  }

  obtenerAeropuertos() {
    this.aeropuertoService.obtenerAeropuertos()
      .subscribe(aeropuertos => this.aeropuertos=aeropuertos);
  }

  borrar(id: number){
    this.aeropuertoService.borrarAeropuerto(id)
      .subscribe(_=>this.obtenerAeropuertos());
  }

}
