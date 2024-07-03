import { ProductService } from './../../core/service/product.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { Categories } from 'src/app/core/interface/categories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/core/service/wishlist.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CuttextPipe, CarouselModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService,
    private _toastr: ToastrService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService
  ) {}
  products: Product[] = [];
  categories: Categories[] = [];
  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next: (response) => {
        this.products = response.data;
      },
    });

    this._ProductService.getcategories().subscribe({
      next: (response) => {
        this.categories = response.data;
      },
    });
  }
  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');
    this._CartService.AddToCart(id).subscribe({
      next: (response) => {
        this._CartService.cartNumber.next(response.numOfCartItems);
        console.log(response.lentgh);

        this._toastr.success(response.message);
        this._Renderer2.removeAttribute(element, 'disabled');
      },
      error: (err) => {
        //
        this._Renderer2.removeAttribute(element, 'disabled');
      },
    });
  }

  AddTofav(id: any): void {
    this._WishlistService.AddTowishlist(id).subscribe({
      next: (response) => {
        this._toastr.info(response.message);
        console.log(response.data);
        console.log(response);

        this._WishlistService.wishNumber.next(response.data.length);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  categoriesOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
}
