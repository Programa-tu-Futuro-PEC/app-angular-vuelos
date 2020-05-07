import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aeropuerto } from './aeropuerto';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  private URL = 'http://localhost:8080/api/aeropuerto/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  obtenerAeropuertos(): Observable<Aeropuerto[]>{
    return this.http.get<Aeropuerto[]>(this.URL);
  }

  obtenerAeropuertoPorId(id: number): Observable<Aeropuerto>{
    return this.http.get<Aeropuerto>(this.URL+id);
  }

  guardarAeropuerto(aeropuerto: Aeropuerto) {
    return this.http.post<Aeropuerto>(this.URL, aeropuerto, this.httpOptions);
  }

  borrarAeropuerto(id: number) {
    return this.http.delete(this.URL+id, this.httpOptions);
  }

  modificarAeropuerto(arg0: Aeropuerto) {
    return this.http.put<Aeropuerto>(this.URL, arg0, this.httpOptions);
  }

}
