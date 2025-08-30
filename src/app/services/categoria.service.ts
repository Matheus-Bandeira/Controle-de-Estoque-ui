import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { API } from '../core/api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(API.CATEGORIAS.LISTAR, { headers: this.getHeaders() });
  }

  criar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(API.CATEGORIAS.CADASTRAR, categoria, { headers: this.getHeaders() });
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(API.CATEGORIAS.BUSCAR_POR_ID(Number(id)), { headers: this.getHeaders() });
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(
      API.CATEGORIAS.ATUALIZAR(Number(categoria.id)), 
      categoria,
      { headers: this.getHeaders() }
    );
  }

  deletar(categoria: Categoria): Observable<void> {
    return this.http.delete<void>(API.CATEGORIAS.DELETAR(Number(categoria.id)), { headers: this.getHeaders() });
  }
}
