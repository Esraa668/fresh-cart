import { CartService } from 'src/app/core/service/cart.service';
import { ProductService } from './../../core/service/product.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from 'src/app/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/service/wishlist.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CuttextPipe,
    RouterLink,
    NgxPaginationModule,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private _toastr: ToastrService,
    private _WishlistService: WishlistService
  ) {}
  products: Product[] = [];
  term: string = '';
  pageSize: number = 0;
  current: number = 1;
  total: number = 0;
  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next: (response) => {
        this.products = response.data;
        this.pageSize = response.metadata.limit;
        this.current = response.metadata.currentPage;
        this.total = response.results;
      },
    });
  }

  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');
    this._CartService.AddToCart(id).subscribe({
      next: (response) => {
        this._CartService.cartNumber.next(response.numOfCartItems);
        this._toastr.success(response.message);
        this._Renderer2.removeAttribute(element, 'disabled');
      },
      error: (err) => {
        //
        this._Renderer2.removeAttribute(element, 'disabled');
      },
    });
  }

  pageChanged(event: any): void {
    this._ProductService.getProduct(event).subscribe({
      next: (response) => {
        this.products = response.data;
        this.pageSize = response.metadata.limit;
        this.current = response.metadata.currentPage;
        this.total = response.results;
      },
    });
  }

  AddTowishlist(id: any): void {
    this._WishlistService.AddTowishlist(id).subscribe({
      next: (response) => {
        this._toastr.info(response.message);
        this._WishlistService.wishNumber.next(response.data.length);

        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
