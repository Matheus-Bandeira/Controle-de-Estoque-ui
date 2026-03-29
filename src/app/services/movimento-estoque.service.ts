import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../core/api';

@Injectable({
  providedIn: 'root'
})
export class MovimentoEstoqueService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  movimentoEstoque(movimentoEstoqueRequest: any): Observable<any> {
      return this.http.post<any>(API.MOVIMENTO_ESTOQUE.MOVIMENTACOES, movimentoEstoqueRequest, { headers: this.getHeaders() });
  }
}
