import { WishlistService } from 'src/app/core/service/wishlist.service';
import {
  Component,
  HostListener,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
})
export class NavBlankComponent implements OnInit {
  count: number = 0;
  wish: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private renderer: Renderer2,
    private _WishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.cartService.cartNumber.subscribe({
      next: (data: number) => {
        this.count = data;
      },
    });
    this._WishlistService.wishNumber.subscribe({
      next: (data: any) => {
        this.wish = data;
      },
    });
    this.cartService.GetCart().subscribe({
      next: (value: { numOfCartItems: number }) => {
        this.count = value.numOfCartItems;
      },
    });
    this._WishlistService.Getwish().subscribe({
      next: (value: { count: number }) => {
        this.wish = value.count;
      },
    });
  }

  signout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  @ViewChild('nav') nav?: ElementRef;

  @HostListener('window:scroll')
  scroll(): void {
    if (window.scrollY > 300) {
      this.renderer.addClass(this.nav?.nativeElement, 'px-4');
    } else {
      this.renderer.removeClass(this.nav?.nativeElement, 'px-4');
    }
  }
}
