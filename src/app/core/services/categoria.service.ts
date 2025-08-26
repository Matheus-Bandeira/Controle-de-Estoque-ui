import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/core/models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiURL = 'http://localhost:3000/categorias';
  constructor(private http: HttpClient) { }

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiURL);
  }

  criar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiURL, categoria);
  }

  buscarPorId(id: string | number): Observable<Categoria> {
  return this.http.get<Categoria>(`${this.apiURL}/${id}`);
}

  atualizar(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiURL}/${categoria.id}`, categoria);
  }

  deletar(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
