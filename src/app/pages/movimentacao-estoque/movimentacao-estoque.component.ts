import { Component, HostListener, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { AuthService } from 'src/app/services/auth.service';
import { MovimentoEstoqueService } from 'src/app/services/movimento-estoque.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-movimentacao-estoque',
  templateUrl: './movimentacao-estoque.component.html',
  styleUrls: ['./movimentacao-estoque.component.css']
})
export class MovimentacaoEstoqueComponent implements OnInit{

  produtos: Produto[] = [];
  produtosFiltrados: any[] = [];

  filtroProduto: string = '';
  mostrarDropdown: boolean = false;

  movimentacao: any = {
    produtoId: null,
    usuarioId: null,
    quantidade: null,
    tipoMovimentacao: 'ENTRADA',
    motivo: ''
  };

  alert = {
    show: false,
    type: '', // 'success' | 'danger'
    message: ''
  };

  usuarioId: any  = null;

  constructor(
    private authService: AuthService,
    private produtoService: ProdutoService,
    private movimentoEstoqueService: MovimentoEstoqueService
  ){}

  ngOnInit(): void {
      this.produtoService.listar().subscribe((res) => {
          this.produtos = res;
          console.log(this.produtos)
      });

      this.usuarioId = this.authService.getUserId();
  }


  filtrarProdutos() {
    const termo = this.filtroProduto.toLowerCase();

    this.produtosFiltrados = this.produtos.filter(p =>
      p.nome.toLowerCase().includes(termo) ||
      p.codigo.toLowerCase().includes(termo)
    );

    this.mostrarDropdown = true;
  }

  selecionarProduto(produto: any) {
    this.movimentacao.produtoId = produto.id;
    this.filtroProduto = `${produto.nome} (${produto.codigo})`;
    this.mostrarDropdown = false;
  }

  salvar() {
    this.movimentacao.usuarioId = this.usuarioId;

    this.movimentoEstoqueService.movimentoEstoque(this.movimentacao)
      .subscribe({
        next: () => {
          this.mostrarAlert('success', 'Movimentação salva com sucesso!');
          this.resetForm();
        },
        error: (error) => {
          console.log(error);

          const mensagemErro = error?.error?.erro
            || 'Erro ao realizar movimentação';

          this.mostrarAlert('danger', mensagemErro);
        }
      });
  }

  resetForm() {
    this.movimentacao = {
      produtoId: null,
      quantidade: null,
      tipoMovimentacao: 'ENTRADA',
      motivo: ''
    };

    this.filtroProduto = '';
    this.produtosFiltrados = [];
    this.mostrarDropdown = false;
  }

  mostrarAlert(type: string, message: string) {
    this.alert = {
      show: true,
      type,
      message
    };

    // opcional: auto fechar após 4s
    setTimeout(() => {
      this.alert.show = false;
    }, 4000);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: any) {
    this.mostrarDropdown = false;
  }
}
