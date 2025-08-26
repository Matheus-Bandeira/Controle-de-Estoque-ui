import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent {

  categoria = { nome: ''};
  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  criar() {
    this.categoriaService.criar(this.categoria).subscribe({
      next: () => this.router.navigate(['/categoria']),
      error: (erro) => console.error('Erro ao criar categoria:', erro)
    });
  }
}
