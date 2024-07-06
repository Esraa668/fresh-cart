import { CartService } from 'src/app/core/service/cart.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/service/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Details } from 'src/app/core/interface/details';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/core/service/wishlist.service';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, CarouselModule, CuttextPipe],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id!: string | null;
  details: Details = {} as Details;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Renderer2: Renderer2,
    private _toastr: ToastrService,
    private _CartService: CartService,
    private _WishlistService: WishlistService
  ) {}
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
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this._ProductService.getDetails(this.id).subscribe({
            next: (response) => {
              this.details = response.data;
            },
            error: (err) => {
              console.error('Error fetching details:', err);
            },
          });
        }
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

  detailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
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
  };
}
