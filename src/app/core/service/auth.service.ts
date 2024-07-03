import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient) { }
userInfo:any;
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`
  register(userData:object):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + 'signup',userData)
  }
  login(loginDate:object):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + 'signin',loginDate)
  }
  
  decodeDate():void{
    const encode =localStorage.getItem('token')
    if(encode !==null)
      {
const decode =jwtDecode(encode)
this.userInfo=decode
      }
  }
}
