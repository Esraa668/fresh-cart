import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  err: string = '';
  load: boolean = false;
  loginGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-z0-9_@]{6,}$/),
    ]),
  });

  handle(): void {
    this.load = true;
    const loginDate = this.loginGroup.value;
    if (this.loginGroup.valid === true)
      this._AuthService.login(loginDate).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this.load = false;
            localStorage.setItem('token', response.token);
            this._AuthService.decodeDate();
            //programing routing
            this._Router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.load = false;
          this.err = err.error.message;
        },
      });
  }
}
