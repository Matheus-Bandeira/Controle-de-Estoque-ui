import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../core/api';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private api = "http://localhost:8080/api/relatorios/movimento-estoque";

  constructor(private http: HttpClient) { }

  gerarRelatorioEstoqueBaixo() {
    // responseType 'blob' é necessário para arquivos binários
    this.http.get(API.RELATORIOS.ESTOQUE_MINIMO, { responseType: 'blob' }).subscribe(
      (res: Blob) => {
        const url = window.URL.createObjectURL(res);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'estoque_baixo.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Erro ao gerar PDF', error);
        alert('Não foi possível gerar o relatório. Verifique se está logado.');
      }
    );
  }

  gerarRelatorioMovimentoEstoque(dataInicio: string, dataFim: string) {
    return this.http.get<any[]>(
      this.api,
      {
        params: {
          dataInicio: dataInicio + 'T00:00:00',
          dataFim: dataFim + 'T23:59:59'
        }
      }
    )
  }
}
