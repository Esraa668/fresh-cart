import { CartService } from './../../core/service/cart.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { Cart } from 'src/app/core/interface/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart | null = null;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    private renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    this.cartService.GetCart().subscribe({
      next: (value) => {
        console.log(value);
        this.cart = value.data;
      },
      error: (err) => {
        // Handle error
      },
    });
  }

  removeItem(id: any, element: HTMLButtonElement): void {
    this.renderer2.setAttribute(element, 'disabled', 'true');
    this.cartService.removeCartItem(id).subscribe({
      next: (info) => {
        this.cart = info.data;
        this.toastr.warning('Item removed successfully from your cart');
        this.renderer2.removeAttribute(element, 'disabled');
        this.cartService.cartNumber.next(info.numOfCartItems);
      },
      error: (err) => {
        this.renderer2.removeAttribute(element, 'disabled');
        // Handle error
      },
    });
  }

  changeCount(
    id: string,
    count: number,
    element: HTMLButtonElement,
    el: HTMLButtonElement
  ): void {
    if (count >= 1) {
      this.renderer2.setAttribute(element, 'disabled', 'true');
      this.renderer2.setAttribute(el, 'disabled', 'true');
      this.cartService.updateCart(id, count).subscribe({
        next: (value) => {
          this.cart = value.data;
          this.renderer2.removeAttribute(element, 'disabled');
          this.renderer2.removeAttribute(el, 'disabled');
          console.log(value);
        },
        error: (err) => {
          this.renderer2.removeAttribute(element, 'disabled');
          this.renderer2.removeAttribute(el, 'disabled');
          // Handle error
        },
      });
    }
  }

  clear(): void {
    this.cartService.ClearCart().subscribe({
      next: (info) => {
        if (info.message === 'success') {
          this.cart = null;
          console.log(info);
          this.cartService.cartNumber.next(0);
        }
      },
      error: (err) => {
        // Handle error
      },
    });
  }
}
