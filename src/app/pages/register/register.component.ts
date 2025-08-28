import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formUser: FormGroup;
  sucesso: boolean = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.formUser = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      perfil: ['', [Validators.required]]
    });
  }

  registrarUsuario() {
    if(this.formUser.valid) {
      const usuario: Usuario = this.formUser.value as Usuario;

      this.registerService.registrarUsuario(usuario).subscribe({
        next: (res) => {
          this.sucesso = true;
          this.formUser.reset();

          setTimeout(() => {
            this.router.navigate(['/'])
          }, 2000);
        },
        error: (err) => {
          console.error('Erro ao registrar usuário', err);
        }
      })

    }

  }
}
