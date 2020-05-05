import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aeropuerto } from './aeropuerto';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  private URL = 'http://localhost:8080/api/aeropuerto/'

  constructor(private http: HttpClient) { }

  obtenerAeropuertos(): Observable<Aeropuerto[]>{
    return this.http.get<Aeropuerto[]>(this.URL);
  }

  obtenerAeropuertoPorId(id: number): Observable<Aeropuerto>{
    return this.http.get<Aeropuerto>(this.URL+id);
  }

}
