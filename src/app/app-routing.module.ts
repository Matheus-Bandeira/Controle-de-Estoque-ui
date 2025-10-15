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
      {path: 'fornecedor', component: FornecedorListComponent},
      {path: 'fornecedor/cadastrar', component: FornecedorFormComponent},
      {path: 'fornecedor/atualizar/:id', component: FornecedorFormComponent},
      {path: 'produto', component: ProdutoListComponent}
      // aqui você coloca todas as telas que usam o menu
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
