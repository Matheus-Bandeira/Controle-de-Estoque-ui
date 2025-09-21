import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { CategoriaFormComponent } from './pages/categoria/categoria-form/categoria-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategoriaListComponent } from './pages/categoria/categoria-list/categoria-list.component';
import { AuthInterceptor } from './core/auth.interceptor';
import { FornecedorFormComponent } from './pages/fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorListComponent } from './pages/fornecedor/fornecedor-list/fornecedor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    MainLayoutComponent,
    RegisterComponent,
    MainLayoutComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    FornecedorFormComponent,
    FornecedorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
