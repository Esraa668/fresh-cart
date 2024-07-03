import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;

  //behaviorsubject
  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  AddToCart(cartId: string): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `cart`, { productId: cartId });
  }

  GetCart(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `cart`);
  }
  removeCartItem(id: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${id}`);
  }
  updateCart(id: string, counter: number): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `cart/${id}`, {
      count: counter,
    });
  }

  ClearCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart`);
  }
  CheckOut(cartId: string | null, orderInfo: object): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl +
        `orders/checkout-session/${cartId}?url=https://esraa668.github.io/fresh-cart/`,
      {
        shippingAddress: orderInfo,
      }
    );
  }
}
