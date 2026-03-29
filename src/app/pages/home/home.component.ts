import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  movPorDia: { dia: string; entradas: number; saidas: number }[] = [];
  estoquePorCategoria: { categoria: string; quantidade: number }[] = [];
  maxEstoque = 0;

  constructor(private mockData: MockDataService){

  }

  ngOnInit(): void {
    this.movPorDia = this.mockData.getMovimentacoesPorDia();
    this.estoquePorCategoria = this.mockData.getEstoquePorCategoria();
    this.maxEstoque = Math.max(...this.estoquePorCategoria.map(c => c.quantidade));
  }
}
