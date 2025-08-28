import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }


  login() {
    if (this.form.valid) {
      const { email, senha } = this.form.value;
      this.authService.login(email, senha).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erro no login:', err);
          if (err.error instanceof ErrorEvent) {
            console.error("Erro do lado do cliente:", err.error.message);
          } else {
            console.error(`Erro do backend: ${err.status} - ${err.statusText}`);
            console.error("Detalhes:", err.error);
          }
        }
      });
    }
  }
}
