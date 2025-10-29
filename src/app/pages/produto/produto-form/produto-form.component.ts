import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  produtoForm!: FormGroup;
  categorias: any[] = [];
  fornecedores: any[] = [];
  editando = false;
  idProduto?: number;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.configurarFormulario();
    this.carregarCategorias();
    this.carregarFornecedores();

    // Verifica se há parâmetro de edição
    this.idProduto = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idProduto) {
      this.editando = true;
      this.carregarProduto(this.idProduto);
    }
  }

  private configurarFormulario(): void {
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],
      codigo: ['', Validators.required],
      descricao: [''],
      unidadeMedida: ['', Validators.required],
      estoqueMinimo: [0, [Validators.required, Validators.min(0)]],
      quantidadeAtual: [0, [Validators.required, Validators.min(0)]],
      preco: [null, [Validators.required, Validators.min(0.01)]],
      categoriaId: [null, Validators.required],
      fornecedorId: [null, Validators.required]
    });
  }

  private carregarCategorias(): void {
    this.categoriaService.listar().subscribe({
      next: (dados) => (this.categorias = dados),
      error: (erro) => console.error('Erro ao carregar categorias', erro)
    });
  }

  private carregarFornecedores(): void {
    this.fornecedorService.listar().subscribe({
      next: (dados) => (this.fornecedores = dados),
      error: (erro) => console.error('Erro ao carregar fornecedores', erro)
    });
  }

  private carregarProduto(id: number): void {
    this.produtoService.buscarPorId(id).subscribe({
      next: (produto: Produto) => {
        this.produtoForm.patchValue(produto);
      },
      error: (erro) => console.error('Erro ao carregar produto', erro)
    });
  }

  salvar(): void {
    if (this.produtoForm.invalid) return;

    const produto = this.produtoForm.value as Produto;

    if (this.editando && this.idProduto) {
      this.produtoService.atualizar(this.idProduto, produto).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/produtos']);
        },
        error: (erro) => console.error('Erro ao atualizar produto', erro)
      });
    } else {
      this.produtoService.cadastrar(produto).subscribe({
        next: () => {
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['/produtos']);
        },
        error: (erro) => console.error('Erro ao cadastrar produto', erro)
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/produto']);
  }
}
