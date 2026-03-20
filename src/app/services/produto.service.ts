import { Injectable } from '@angular/core';
import { API } from '../core/api';
import { Produto } from '../models/Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(API.PRODUTOS.LISTAR, { headers: this.getHeaders() });
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(API.PRODUTOS.BUSCAR_POR_ID(id), { headers: this.getHeaders() });
  }

  cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(API.PRODUTOS.CADASTRAR, produto, { headers: this.getHeaders() });
  }

  atualizar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(API.PRODUTOS.ATUALIZAR(id), produto, { headers: this.getHeaders() });
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(API.PRODUTOS.DELETAR(id), { headers: this.getHeaders() });
  }
}