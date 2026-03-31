import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  buscarUsuarioPorEmail(): Observable<Usuario> {
    return this.http.get<Usuario>("", { headers: this.getHeaders() });
  }

  buscarUsuarioPeloId(): Observable<Usuario> {
    return this.http.get<Usuario>("", { headers: this.getHeaders() });
  }


}
