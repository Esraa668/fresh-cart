import { WishlistService } from './../../core/service/wishlist.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/interface/product';
import { CartService } from 'src/app/core/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  products: Product[] = [];
  countWish: number = 0;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private toastr: ToastrService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.wishlistService.Getwish().subscribe({
      next: (value) => {
        this.products = value.data;
        console.log(value);

        this.wishlistService.wishNumber.next(value.count);
      },
    });
  }

  addProduct(id: any, element: HTMLButtonElement): void {
    this.renderer.setAttribute(element, 'disabled', 'true');
    this.cartService.AddToCart(id).subscribe({
      next: (response) => {
        this.cartService.cartNumber.next(response.numOfCartItems);
        this.toastr.success(response.message);
        this.renderer.removeAttribute(element, 'disabled');
      },
      error: (err) => {
        console.log(err);
        this.renderer.removeAttribute(element, 'disabled');
      },
    });
  }

  removeItem(id: any): void {
    this.wishlistService.removeWishItem(id).subscribe({
      next: (response) => {
        this.products = this.products.filter((product) => product._id !== id);
        this.wishlistService.wishNumber.next(response.data.length);

        this.toastr.warning(response.message);
        console.log(this.products);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
