import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/models/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.listar().subscribe({
      next: (dados) => this.categorias = dados,
      error: (erro) => console.error('Erro ao carregar categorias:', erro)
    });
  }
}
