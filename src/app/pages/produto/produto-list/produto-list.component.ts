import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html'
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  categorias: any[] = [];
  filtroForm!: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filtroForm = this.fb.group({
      nome: [''],
      codigo: [''],
      categoria: ['']
    });

    this.carregarProdutos();
    this.carregarCategorias();

    // atualiza lista ao digitar/selecionar filtros
    this.filtroForm.valueChanges.subscribe((val) => {
      this.aplicarFiltro(val);
    });
  }

  
  carregarProdutos(): void {
    this.produtoService.listar().subscribe((data) => {
    // Se categoria vier só como id, faz o join manual
    this.produtos = data.map(produto => {
      if (typeof produto.categoriaId === 'number') {
        const categoriaObj = this.categorias.find(c => c.id === produto.categoriaId);
        return { ...produto, categoria: categoriaObj };
      }
      return produto;
    });
    this.produtosFiltrados = this.produtos;
  });
  }

  carregarCategorias(): void {
    this.categoriaService.listar().subscribe((data) => {
      this.categorias = data;
    });
  }

  aplicarFiltro(val: any): void {
    this.produtosFiltrados = this.produtos.filter((p) => {
      const nomeMatch = p.nome
        ?.toLowerCase()
        .includes(val.nome.toLowerCase());
      const codigoMatch = p.codigo
        ?.toLowerCase()
        .includes(val.codigo.toLowerCase());
      const categoriaMatch =
        !val.categoria || p.categoriaId?.id === +val.categoria;

      return nomeMatch && codigoMatch && categoriaMatch;
    });
  }

  editar(produto: Produto): void {
    if (!produto.id) return;
    this.router.navigate(['/produto/atualizar', produto.id]);
  }

  excluir(produto: Produto): void {
    if (!produto.id) return;
    const confirma = confirm(
      `Deseja realmente excluir o produto "${produto.nome}"?`
    );
    if (!confirma) return;

    this.produtoService.excluir(produto.id).subscribe(() => {
      this.carregarProdutos();
    });
  }

  adicionar(): void {
    this.router.navigate(['/produto/cadastrar']);
  }
}
