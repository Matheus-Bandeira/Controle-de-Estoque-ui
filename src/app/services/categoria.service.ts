import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { API } from '../core/api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiURL = 'http://localhost:8080/categorias';

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

  buscarPorId(id: string | number): Observable<Categoria> {
    return this.http.get<Categoria>(API.CATEGORIAS.BUSCAR_POR_ID(Number(id)), { headers: this.getHeaders() });
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    //return this.http.put<Categoria>(`${this.apiURL}/${categoria.id}`, categoria, { headers: this.getHeaders() });
    return this.http.put<Categoria>(
      API.CATEGORIAS.ATUALIZAR(Number(categoria.id)), // garante que seja number
      categoria,
      { headers: this.getHeaders() }
    );
  }

  deletar(id: string | number): Observable<void> {
    return this.http.delete<void>(API.CATEGORIAS.DELETAR(id), { headers: this.getHeaders() });
  }
}
