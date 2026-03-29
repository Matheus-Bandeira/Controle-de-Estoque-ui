import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MovimentoEstoqueService } from 'src/app/services/movimento-estoque.service';
import { RelatorioService } from 'src/app/services/relatorio.service';

@Component({
  selector: 'app-relatorio-movimentacao-estoque',
  templateUrl: './relatorio-movimentacao-estoque.component.html',
  styleUrls: ['./relatorio-movimentacao-estoque.component.css']
})
export class RelatorioMovimentacaoEstoqueComponent {

  dataInicio!: string;
  dataFim!: string;

  movimentacoes: any[] = [];

  buscou = false;

  constructor(
    private relatorioService: RelatorioService
  ) {}

  buscarRelatorio() {

    if (!this.dataInicio || !this.dataFim) {
      alert('Informe a data início e data fim')
      return
    }

    this.relatorioService
      .gerarRelatorioMovimentoEstoque(this.dataInicio, this.dataFim)
      .subscribe({
        next: (response) => {
          this.movimentacoes = response
          this.buscou = true
        },
        error: (error) => {
          console.error(error)
        }
      })

  }

  exportarPDF() {

    const doc = new jsPDF()

    const colunas = [
      'Data',
      'Produto',
      'Quantidade',
      'Tipo',
      'Motivo',
      'Usuário'
    ]

    const linhas = this.movimentacoes.map(item => [

      new Date(item.data).toLocaleString('pt-BR'),
      item.produtoNome,
      item.quantidade,
      item.tipoMovimentacao,
      item.motivo,
      item.usuarioNome

    ])

    doc.text('Relatório de Movimentação de Estoque', 14, 15)

    autoTable(doc, {
      head: [colunas],
      body: linhas,
      startY: 20,
      theme: 'grid',
      styles: {
        fontSize: 9
      },
      headStyles: {
        fillColor: [41, 128, 185]
      }
    })

    doc.save('relatorio-movimentacao-estoque.pdf')

  }
}
