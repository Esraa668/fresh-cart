import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ForgotPasswordService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/auth/`;
  forgotPasswords(email: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'forgotPasswords', email);
  }
  verifyResetCode(resetCode: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'verifyResetCode', resetCode);
  }

  resetPassword(userData: object): Observable<any> {
    return this._HttpClient.put(this.baseUrl + 'resetPassword', userData);
  }
}
