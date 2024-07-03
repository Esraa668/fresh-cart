import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;
  wishNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  //behaviorsubject
  AddTowishlist(wishId: string | undefined): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `wishlist`, {
      productId: wishId,
    });
  }

  Getwish(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `wishlist`);
  }
  removeWishItem(id: string | undefined): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `wishlist/${id}`);
  }
}
