import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css']
})
export class FornecedorFormComponent implements OnInit {

  fornecedorForm!: FormGroup;
  editando = false;
  fornecedorId?: number;

  constructor(
    private fb: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fornecedorForm = this.fb.group({
      nome: ['', Validators.required],
      cnpj: ['', Validators.required],
      telefone: [''],
      email: ['', [Validators.email]]
    });

    // Verifica se é edição
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.editando = true;
        this.fornecedorId = +id;
        this.carregarFornecedor(this.fornecedorId);
      }
    });
  }

  carregarFornecedor(id: number) {
    this.fornecedorService.listar().subscribe(fornecedores => {
      const f = fornecedores.find(f => f.id === id);
      if (f) this.fornecedorForm.patchValue(f);
    });
  }

  salvar() {
    if (this.fornecedorForm.invalid) return;

    const fornecedor: Fornecedor = this.fornecedorForm.value;
    if (this.editando && this.fornecedorId) {
      this.fornecedorService
        .atualizar(this.fornecedorId, fornecedor)
        .subscribe(() => {
          this.router.navigate(['/fornecedor']);
        });
    } else {
      this.fornecedorService.cadastrar(fornecedor).subscribe(() => {
        this.router.navigate(['/fornecedor']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/fornecedor']);
  }

}
