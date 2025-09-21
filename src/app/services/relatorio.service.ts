import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private apiUrl = "http://localhost:8080/api/relatorios/estoque-baixo/pdf";
  
  constructor(private http: HttpClient) { }

  gerarRelatorioEstoqueBaixo() {
    // responseType 'blob' é necessário para arquivos binários
    this.http.get(this.apiUrl, { responseType: 'blob' }).subscribe(
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
}
