import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  categoria: Categoria = { nome: '' };
  editando = false; // flag para saber se é edição ou criação

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.categoria.id = +id;
      this.categoriaService.buscarPorId(+id).subscribe({
        next: (dados) => this.categoria = dados,
        error: (erro) => console.error('Erro ao carregar categoria:', erro)
      });
    }
  }

  salvar() {
    if (this.editando) {
      console.log('Categoria enviada para salvar:', this.categoria);

      this.categoriaService.atualizar(this.categoria).subscribe({
        next: () => this.router.navigate(['/categoria']),
        error: (erro) => console.error('Erro ao atualizar categoria:', erro)
      });
    } else {
      this.categoriaService.criar(this.categoria).subscribe({
        next: () => this.router.navigate(['/categoria']),
        error: (erro) => console.error('Erro ao criar categoria:', erro)
      });
    }
  }
}