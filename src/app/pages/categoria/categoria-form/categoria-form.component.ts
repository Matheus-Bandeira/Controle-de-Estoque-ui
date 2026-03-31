import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  categoriaForm!: FormGroup;
  editando = false;
  idCategoria?: number;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.configurarFormulario();

    // Verifica se há parâmetro de edição
    this.idCategoria = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idCategoria) {
      this.editando = true;
      this.carregarCategoria(this.idCategoria);
    }
  }

  private configurarFormulario(): void {
    this.categoriaForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  private carregarCategoria(id: number): void {
    this.categoriaService.buscarPorId(id).subscribe({
      next: (categoria: Categoria) => {
        this.categoriaForm.patchValue(categoria);
      },
      error: (erro) => console.error('Erro ao carregar categoria', erro)
    });
  }

  salvar(): void {
    if (this.categoriaForm.invalid) return;

    let categoria = this.categoriaForm.value as Categoria;

    if (this.editando && this.idCategoria) {
      categoria.id = this.idCategoria;
      this.categoriaService.atualizar(categoria).subscribe({
        next: () => {
          alert('Categoria atualizada com sucesso!');
          this.router.navigate(['/categoria']);
        },
        error: (erro) => console.error('Erro ao atualizar categoria', erro)
      });
    } else {
      this.categoriaService.criar(categoria).subscribe({
        next: () => {
          alert('Categoria cadastrada com sucesso!');
          this.router.navigate(['/categoria']);
        },
        error: (erro) => console.error('Erro ao cadastrar categoria', erro)
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/categoria']);
  }
}