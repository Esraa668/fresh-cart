import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import ForgotPasswordService from 'src/app/core/service/forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  constructor(
    private _ForgotPasswordService: ForgotPasswordService,
    private _Router: Router
  ) {}
  temp1: boolean = true;
  temp2: boolean = false;
  temp3: boolean = false;
  email: string = '';
  errorMsg: string = '';

  ForgotPasswordrGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  resetCoderGroup: FormGroup = new FormGroup({
    resetCode: new FormControl(''),
  });

  resetpassrGroup: FormGroup = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-z0-9_@]{6,}$/),
    ]),
  });
  ForgotPassword(): void {
    let userEmail = this.ForgotPasswordrGroup.value; //{email:valua}

    this.email = userEmail.email;
    this._ForgotPasswordService.forgotPasswords(userEmail).subscribe({
      next: (info) => {
        console.log(info);
        this.errorMsg = info.message;
        this.temp1 = false;
        this.temp2 = true;
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      },
    });
  }
  resetCoder(): void {
    let code = this.resetCoderGroup.value;
    this._ForgotPasswordService.verifyResetCode(code).subscribe({
      next: (info) => {
        this.errorMsg = info.status;
        this.temp2 = false;
        this.temp3 = true;
        console.log(info);
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      },
    });
  }
  resetpass(): void {
    let restForm = this.resetpassrGroup.value; // object {newpass:value}
    // add value to oject
    restForm.email = this.email;
    this._ForgotPasswordService.resetPassword(restForm).subscribe({
      next: (info) => {
        if (info.token) {
          localStorage.setItem('token', info.token);
          //programing routing
          this._Router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      },
    });
  }
}
