import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent {
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriaService.listar().subscribe({
      next: (dados) => this.categorias = dados,
      error: (erro) => console.error('Erro ao carregar categorias:', erro)
    });
  }
  atualizar(categoria: Categoria) {
    this.router.navigate(['/categoria/atualizar', categoria.id]);
  }

  excluir(categoria: Categoria) {
    if (confirm('Tem certeza que deseja excluir esta categoria?')) {
      this.categoriaService.deletar(categoria).subscribe({
        next: () => this.ngOnInit(),
        error: (erro) => console.error('Erro ao excluir categoria:', erro)
      });
    }
  }
}
