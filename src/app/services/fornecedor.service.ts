import { Injectable } from '@angular/core';
import { API } from '../core/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fornecedor } from '../models/fornecedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }
  

  listar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(API.FORNECEDORES.LISTAR, { headers: this.getHeaders() });
  }

  buscarPorId(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(API.FORNECEDORES.BUSCAR_POR_ID(id), { headers: this.getHeaders() });
  }

  cadastrar(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(API.FORNECEDORES.CADASTRAR, fornecedor, { headers: this.getHeaders() });
  }

  atualizar(id: number, fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(API.FORNECEDORES.ATUALIZAR(id), fornecedor, { headers: this.getHeaders() });
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(API.FORNECEDORES.DELETAR(id), { headers: this.getHeaders() });
  }
}
