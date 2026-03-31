import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias: Categoria[] = [];
  categoriasFiltradas: Categoria[] = [];
  filtroForm!: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filtroForm = this.fb.group({
      nome: ['']
    });

    this.carregarCategorias();

    // Atualiza lista ao digitar/selecionar filtros
    this.filtroForm.valueChanges.subscribe((val) => {
      this.aplicarFiltro(val);
    });
  }

  carregarCategorias(): void {
    this.categoriaService.listar().subscribe({
      next: (dados) => {
        this.categorias = dados;
        this.categoriasFiltradas = this.categorias;
      },
      error: (erro) => console.error('Erro ao carregar categorias:', erro)
    });
  }

  aplicarFiltro(val: any): void {
    this.categoriasFiltradas = this.categorias.filter((c) => {
      const nomeMatch = c.nome
        ?.toLowerCase()
        .includes(val.nome.toLowerCase());
      return nomeMatch;
    });
  }

  editar(categoria: Categoria): void {
    if (!categoria.id) return;
    this.router.navigate(['/categoria/atualizar', categoria.id]);
  }

  excluir(categoria: Categoria): void {
    if (!categoria.id) return;
    const confirma = confirm(
      `Deseja realmente excluir a categoria "${categoria.nome}"?`
    );
    if (!confirma) return;

    this.categoriaService.deletar(categoria).subscribe(() => {
      this.carregarCategorias();
    });
  }

  adicionar(): void {
    this.router.navigate(['/categoria/criar']);
  }
}
