import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { authGuard } from './core/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { CategoriaFormComponent } from './pages/categoria/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './pages/categoria/categoria-list/categoria-list.component';
import { FornecedorListComponent } from './pages/fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './pages/fornecedor/fornecedor-form/fornecedor-form.component';
import { ProdutoListComponent } from './pages/produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './pages/produto/produto-form/produto-form.component';
import { MovimentacaoEstoqueComponent } from './pages/movimentacao-estoque/movimentacao-estoque.component';
import { RelatorioMovimentacaoEstoqueComponent } from './pages/relatorio-movimentacao-estoque/relatorio-movimentacao-estoque.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard], // aplica o guard
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path:'categoria', component: CategoriaListComponent},
      { path: 'categoria/criar', component: CategoriaFormComponent },
      { path: 'categoria/atualizar/:id', component: CategoriaFormComponent },
      { path: 'fornecedor', component: FornecedorListComponent},
      { path: 'fornecedor/cadastrar', component: FornecedorFormComponent},
      { path: 'fornecedor/atualizar/:id', component: FornecedorFormComponent},
      { path: 'produto', component: ProdutoListComponent},
      { path: 'produto/cadastrar', component: ProdutoFormComponent},
      { path: 'produto/atualizar/:id', component: ProdutoFormComponent },
      { path: 'movimento/estoque', component: MovimentacaoEstoqueComponent },
      { path: 'relatorio-movimento-estoque', component: RelatorioMovimentacaoEstoqueComponent }
      // aqui você coloca todas as telas que usam o menu
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
