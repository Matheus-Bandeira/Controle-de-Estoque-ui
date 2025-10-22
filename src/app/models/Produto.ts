import { Categoria } from "./categoria";
import { Fornecedor } from "./fornecedor";

export interface Produto {
  id?: number;
  nome: string;
  codigo: string;
  descricao?: string;
  unidadeMedida?: string;
  estoqueMinimo?: number;
  quantidadeAtual?: number;
  preco?: number;
  categoriaId?: number;
  categoriaNome?: string;
   fornecedorId?: number;
  fornecedorNome?: string;
}