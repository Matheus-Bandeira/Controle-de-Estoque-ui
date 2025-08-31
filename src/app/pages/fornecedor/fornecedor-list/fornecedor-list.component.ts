import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';


@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html'
})
export class FornecedorListComponent implements OnInit {
  fornecedores: Fornecedor[] = [];
  fornecedoresFiltrados: Fornecedor[] = [];
  filtroForm!: FormGroup;

  constructor(
    private fornecedorService: FornecedorService, 
    private fb: FormBuilder, 
    private router: Router) {}

  ngOnInit(): void {
    this.filtroForm = this.fb.group({
      nome: [''],
      cnpj: ['']
    });

    this.carregarFornecedores();

    // sempre que digitar no filtro, atualiza a lista
    this.filtroForm.valueChanges.subscribe(val => {
      this.aplicarFiltro(val);
    });
  }

  carregarFornecedores() {
    this.fornecedorService.listar().subscribe(data => {
      this.fornecedores = data;
      this.fornecedoresFiltrados = data; // inicia igual
    });
  }

  aplicarFiltro(val: any) {
    this.fornecedoresFiltrados = this.fornecedores.filter(f =>
      f.nome.toLowerCase().includes(val.nome.toLowerCase()) &&
      f.cnpj.toLowerCase().includes(val.cnpj.toLowerCase())
    );
  }

  editar(fornecedor: Fornecedor) {
  if (!fornecedor.id) return;
  // Navega para o form de fornecedor, passando o ID na rota
  this.router.navigate(['/fornecedor/atualizar', fornecedor.id]);
}

 excluir(fornecedor: Fornecedor) {
  if (!fornecedor.id) return;
  const confirma = confirm(`Deseja realmente excluir o fornecedor "${fornecedor.nome}"?`);
  if (!confirma) return;

  this.fornecedorService.excluir(fornecedor.id).subscribe(() => {
    this.carregarFornecedores(); 
  });
}

 adicionar() {
  this.router.navigate(['/fornecedor/cadastrar']);
}
}
