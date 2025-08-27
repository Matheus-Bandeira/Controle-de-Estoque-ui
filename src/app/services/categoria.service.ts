import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';

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
    return this.http.get<Categoria[]>(this.apiURL, { headers: this.getHeaders() });
  }

  criar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiURL, categoria, { headers: this.getHeaders() });
  }

  buscarPorId(id: string | number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiURL}/${id}`, { headers: this.getHeaders() });
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiURL}/${categoria.id}`, categoria, { headers: this.getHeaders() });
  }

  deletar(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`, { headers: this.getHeaders() });
  }
}
