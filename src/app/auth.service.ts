import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:8080/api/user/login'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(usuario: User): Observable<User>{
      return this.http.post<User>(this.URL, usuario, this.httpOptions);
  }

 
  
  public   isAuthenticated(): boolean{    
    const token = localStorage.getItem('usuario');
    console.log(token);
    if (token != null){
      return true;
    }
    return false;
  }
  
}
