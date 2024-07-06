import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _HttpClient: HttpClient) {}
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;
  getProduct(page: number = 1): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `products?page=${page}`);
  }

  getcategories(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'categories');
  }
  getDetails(id: string | null): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `products/${id}`);
  }
  getSubCategories(id: any): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `categories/${id}`);
  }
  getbrands(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'brands');
  }
}
