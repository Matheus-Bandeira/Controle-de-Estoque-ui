import { Injectable } from '@angular/core';
import { Produto, Categoria, Fornecedor, Movimentacao, DashboardStats } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class MockDataService {

  private produtos: Produto[] = [
    { id: 1, nome: 'Notebook Dell Inspiron 15', sku: 'NB-DELL-001', categoria: 'Eletrônicos', fornecedor: 'Dell Brasil', quantidade: 45, estoqueMinimo: 10, preco: 3899.90, status: 'ativo', dataCadastro: '2024-01-15' },
    { id: 2, nome: 'Mouse Logitech MX Master 3', sku: 'MS-LOG-002', categoria: 'Periféricos', fornecedor: 'Logitech BR', quantidade: 120, estoqueMinimo: 30, preco: 549.90, status: 'ativo', dataCadastro: '2024-02-10' },
    { id: 3, nome: 'Monitor Samsung 27" 4K', sku: 'MN-SAM-003', categoria: 'Eletrônicos', fornecedor: 'Samsung Brasil', quantidade: 8, estoqueMinimo: 15, preco: 2199.00, status: 'ativo', dataCadastro: '2024-01-20' },
    { id: 4, nome: 'Teclado Mecânico Keychron K2', sku: 'TC-KEY-004', categoria: 'Periféricos', fornecedor: 'TechImport', quantidade: 67, estoqueMinimo: 20, preco: 459.90, status: 'ativo', dataCadastro: '2024-03-05' },
    { id: 5, nome: 'Headset HyperX Cloud II', sku: 'HS-HPX-005', categoria: 'Periféricos', fornecedor: 'HyperX Dist', quantidade: 3, estoqueMinimo: 10, preco: 399.90, status: 'ativo', dataCadastro: '2024-02-28' },
    { id: 6, nome: 'Cadeira Ergonômica DT3', sku: 'CD-DT3-006', categoria: 'Mobiliário', fornecedor: 'DT3 Sports', quantidade: 22, estoqueMinimo: 5, preco: 1899.00, status: 'ativo', dataCadastro: '2024-01-10' },
    { id: 7, nome: 'Webcam Logitech C920', sku: 'WC-LOG-007', categoria: 'Periféricos', fornecedor: 'Logitech BR', quantidade: 0, estoqueMinimo: 10, preco: 349.90, status: 'inativo', dataCadastro: '2024-03-15' },
    { id: 8, nome: 'Hub USB-C 7 portas', sku: 'HB-USC-008', categoria: 'Acessórios', fornecedor: 'TechImport', quantidade: 89, estoqueMinimo: 25, preco: 189.90, status: 'ativo', dataCadastro: '2024-04-01' },
    { id: 9, nome: 'SSD NVMe 1TB Samsung', sku: 'SD-SAM-009', categoria: 'Componentes', fornecedor: 'Samsung Brasil', quantidade: 5, estoqueMinimo: 20, preco: 599.90, status: 'ativo', dataCadastro: '2024-03-20' },
    { id: 10, nome: 'Mousepad Gamer XL', sku: 'MP-GMR-010', categoria: 'Acessórios', fornecedor: 'TechImport', quantidade: 200, estoqueMinimo: 50, preco: 79.90, status: 'ativo', dataCadastro: '2024-04-10' },
    { id: 11, nome: 'Cabo HDMI 2.1 2m', sku: 'CB-HDM-011', categoria: 'Acessórios', fornecedor: 'CaboTech', quantidade: 340, estoqueMinimo: 100, preco: 49.90, status: 'ativo', dataCadastro: '2024-02-15' },
    { id: 12, nome: 'Suporte Monitor Articulado', sku: 'SP-MNT-012', categoria: 'Mobiliário', fornecedor: 'ErgoBR', quantidade: 15, estoqueMinimo: 5, preco: 289.90, status: 'ativo', dataCadastro: '2024-03-01' },
  ];

  private categorias: Categoria[] = [
    { id: 1, nome: 'Eletrônicos', descricao: 'Notebooks, monitores e dispositivos eletrônicos', qtdProdutos: 2, status: 'ativa' },
    { id: 2, nome: 'Periféricos', descricao: 'Mouses, teclados, headsets e webcams', qtdProdutos: 4, status: 'ativa' },
    { id: 3, nome: 'Acessórios', descricao: 'Cabos, hubs, mousepads e adaptadores', qtdProdutos: 3, status: 'ativa' },
    { id: 4, nome: 'Mobiliário', descricao: 'Cadeiras, mesas e suportes ergonômicos', qtdProdutos: 2, status: 'ativa' },
    { id: 5, nome: 'Componentes', descricao: 'SSDs, memórias RAM, placas de vídeo', qtdProdutos: 1, status: 'ativa' },
    { id: 6, nome: 'Impressoras', descricao: 'Impressoras, scanners e multifuncionais', qtdProdutos: 0, status: 'inativa' },
  ];

  private fornecedores: Fornecedor[] = [
    { id: 1, razaoSocial: 'Dell Brasil Ltda', cnpj: '72.381.189/0001-10', contato: 'Carlos Souza', email: 'vendas@dell.com.br', telefone: '(11) 4002-8922', cidade: 'São Paulo', estado: 'SP', status: 'ativo' },
    { id: 2, razaoSocial: 'Logitech Brasil', cnpj: '08.744.210/0001-55', contato: 'Ana Paula', email: 'comercial@logitech.com.br', telefone: '(11) 3222-4455', cidade: 'São Paulo', estado: 'SP', status: 'ativo' },
    { id: 3, razaoSocial: 'Samsung Brasil', cnpj: '00.280.273/0001-37', contato: 'Roberto Lima', email: 'b2b@samsung.com.br', telefone: '(11) 4004-0000', cidade: 'Manaus', estado: 'AM', status: 'ativo' },
    { id: 4, razaoSocial: 'TechImport Dist.', cnpj: '33.912.088/0001-44', contato: 'Marcos Andrade', email: 'contato@techimport.com.br', telefone: '(21) 3344-5566', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'ativo' },
    { id: 5, razaoSocial: 'DT3 Sports', cnpj: '21.456.789/0001-00', contato: 'Fernanda Costa', email: 'vendas@dt3sports.com.br', telefone: '(41) 3030-2020', cidade: 'Curitiba', estado: 'PR', status: 'ativo' },
    { id: 6, razaoSocial: 'HyperX Distribuidora', cnpj: '45.678.901/0001-22', contato: 'Diego Nunes', email: 'parceiros@hyperx.com.br', telefone: '(11) 5555-6677', cidade: 'Guarulhos', estado: 'SP', status: 'ativo' },
    { id: 7, razaoSocial: 'CaboTech Ltda', cnpj: '78.123.456/0001-88', contato: 'Lucia Martins', email: 'comercial@cabotech.com.br', telefone: '(19) 3232-1010', cidade: 'Campinas', estado: 'SP', status: 'inativo' },
    { id: 8, razaoSocial: 'ErgoBR Móveis', cnpj: '12.345.678/0001-99', contato: 'Paulo Henrique', email: 'atendimento@ergobr.com.br', telefone: '(31) 4040-5050', cidade: 'Belo Horizonte', estado: 'MG', status: 'ativo' },
  ];

  private movimentacoes: Movimentacao[] = [
    { id: 1, tipo: 'entrada', produto: 'Notebook Dell Inspiron 15', quantidade: 20, motivo: 'Compra fornecedor', responsavel: 'João Silva', data: '2024-04-15 09:30', observacao: 'NF 12345' },
    { id: 2, tipo: 'saida', produto: 'Mouse Logitech MX Master 3', quantidade: 5, motivo: 'Venda', responsavel: 'Maria Santos', data: '2024-04-15 10:15' },
    { id: 3, tipo: 'saida', produto: 'Monitor Samsung 27" 4K', quantidade: 2, motivo: 'Venda', responsavel: 'Maria Santos', data: '2024-04-15 11:00' },
    { id: 4, tipo: 'entrada', produto: 'Teclado Mecânico Keychron K2', quantidade: 30, motivo: 'Compra fornecedor', responsavel: 'João Silva', data: '2024-04-14 14:20', observacao: 'NF 12290' },
    { id: 5, tipo: 'saida', produto: 'Headset HyperX Cloud II', quantidade: 7, motivo: 'Venda', responsavel: 'Pedro Oliveira', data: '2024-04-14 16:45' },
    { id: 6, tipo: 'entrada', produto: 'Hub USB-C 7 portas', quantidade: 50, motivo: 'Compra fornecedor', responsavel: 'João Silva', data: '2024-04-13 08:00', observacao: 'NF 12180' },
    { id: 7, tipo: 'saida', produto: 'Cabo HDMI 2.1 2m', quantidade: 15, motivo: 'Venda', responsavel: 'Ana Costa', data: '2024-04-13 09:30' },
    { id: 8, tipo: 'saida', produto: 'Mousepad Gamer XL', quantidade: 10, motivo: 'Transferência filial', responsavel: 'Pedro Oliveira', data: '2024-04-12 13:00', observacao: 'Filial Campinas' },
    { id: 9, tipo: 'entrada', produto: 'SSD NVMe 1TB Samsung', quantidade: 15, motivo: 'Compra fornecedor', responsavel: 'João Silva', data: '2024-04-12 10:00', observacao: 'NF 12099' },
    { id: 10, tipo: 'saida', produto: 'Notebook Dell Inspiron 15', quantidade: 3, motivo: 'Venda', responsavel: 'Maria Santos', data: '2024-04-11 15:30' },
    { id: 11, tipo: 'entrada', produto: 'Cadeira Ergonômica DT3', quantidade: 10, motivo: 'Compra fornecedor', responsavel: 'João Silva', data: '2024-04-11 09:00', observacao: 'NF 11980' },
    { id: 12, tipo: 'saida', produto: 'Suporte Monitor Articulado', quantidade: 2, motivo: 'Venda', responsavel: 'Ana Costa', data: '2024-04-10 14:00' },
  ];

  getProdutos(): Produto[] {
    return [...this.produtos];
  }

  getProdutoById(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }

  getCategorias(): Categoria[] {
    return [...this.categorias];
  }

  getFornecedores(): Fornecedor[] {
    return [...this.fornecedores];
  }

  getMovimentacoes(): Movimentacao[] {
    return [...this.movimentacoes];
  }

  getDashboardStats(): DashboardStats {
    const ativos = this.produtos.filter(p => p.status === 'ativo');
    return {
      totalProdutos: ativos.length,
      totalEstoque: ativos.reduce((sum, p) => sum + p.quantidade, 0),
      estoqueBaixo: ativos.filter(p => p.quantidade <= p.estoqueMinimo).length,
      movimentacoesHoje: this.movimentacoes.filter(m => m.data.startsWith('2024-04-15')).length,
      valorTotal: ativos.reduce((sum, p) => sum + (p.quantidade * p.preco), 0),
      categorias: this.categorias.filter(c => c.status === 'ativa').length,
    };
  }

  getMovimentacoesPorDia(): { dia: string; entradas: number; saidas: number }[] {
    return [
      { dia: '10/04', entradas: 0, saidas: 2 },
      { dia: '11/04', entradas: 10, saidas: 3 },
      { dia: '12/04', entradas: 15, saidas: 10 },
      { dia: '13/04', entradas: 50, saidas: 15 },
      { dia: '14/04', entradas: 30, saidas: 7 },
      { dia: '15/04', entradas: 20, saidas: 7 },
    ];
  }

  getEstoquePorCategoria(): { categoria: string; quantidade: number }[] {
    return [
      { categoria: 'Eletrônicos', quantidade: 53 },
      { categoria: 'Periféricos', quantidade: 190 },
      { categoria: 'Acessórios', quantidade: 629 },
      { categoria: 'Mobiliário', quantidade: 37 },
      { categoria: 'Componentes', quantidade: 5 },
    ];
  }

  getProdutosEstoqueBaixo(): Produto[] {
    return this.produtos.filter(p => p.status === 'ativo' && p.quantidade <= p.estoqueMinimo);
  }
}
