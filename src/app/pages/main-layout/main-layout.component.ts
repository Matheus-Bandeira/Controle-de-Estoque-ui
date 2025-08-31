import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RelatorioService } from 'src/app/services/relatorio.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {


  relatoriosAberto = false;

  constructor(private router: Router, private relatorioService: RelatorioService) {}

  logout() {
    localStorage.removeItem('token'); 
    this.router.navigate(['/login']); 
  }

  toggleRelatorios(event: Event) {
    event.preventDefault(); // previne comportamento padrão do <a>
    this.relatoriosAberto = !this.relatoriosAberto;
  }

  gerarRelatorioEstoqueBaixo(event: Event) {
    event.preventDefault(); // previne qualquer redirecionamento
    console.log('Clique no submenu Estoque Mínimo');
    this.relatorioService.gerarRelatorioEstoqueBaixo();
  }
}
