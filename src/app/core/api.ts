import { environment } from "src/environments/environment";

export const API = {
    AUTH: {
        LOGIN: `${environment.apiBaseUrl}/login`,
        REGISTER: `${environment.apiBaseUrl}/register`
    },
    CATEGORIAS: {
        LISTAR: `${environment.apiBaseUrl}/categorias`,
        CADASTRAR: `${environment.apiBaseUrl}/categorias`,
        DELETAR: (id: number) =>`${environment.apiBaseUrl}/categorias/${id}`,
        ATUALIZAR: (id: number) => `${environment.apiBaseUrl}/categorias/${id}`,
        BUSCAR_POR_ID: (id: number) => `${environment.apiBaseUrl}/categorias/${id}`
    },

    FORNECEDORES: {
    LISTAR: `${environment.apiBaseUrl}/fornecedores`,
    CADASTRAR: `${environment.apiBaseUrl}/fornecedores`,
    DELETAR: (id: number) => `${environment.apiBaseUrl}/fornecedores/${id}`,
    ATUALIZAR: (id: number) => `${environment.apiBaseUrl}/fornecedores/${id}`,
    BUSCAR_POR_ID: (id: number) => `${environment.apiBaseUrl}/fornecedores/${id}`
  }
};