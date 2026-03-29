export interface Produto {
  id: number;
  nome: string;
  sku: string;
  categoria: string;
  fornecedor: string;
  quantidade: number;
  estoqueMinimo: number;
  preco: number;
  status: 'ativo' | 'inativo';
  dataCadastro: string;
}

export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  qtdProdutos: number;
  status: 'ativa' | 'inativa';
}

export interface Fornecedor {
  id: number;
  razaoSocial: string;
  cnpj: string;
  contato: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  status: 'ativo' | 'inativo';
}

export interface Movimentacao {
  id: number;
  tipo: 'entrada' | 'saida';
  produto: string;
  quantidade: number;
  motivo: string;
  responsavel: string;
  data: string;
  observacao?: string;
}

export interface DashboardStats {
  totalProdutos: number;
  totalEstoque: number;
  estoqueBaixo: number;
  movimentacoesHoje: number;
  valorTotal: number;
  categorias: number;
}
