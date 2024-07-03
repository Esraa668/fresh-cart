import { CartService } from 'src/app/core/service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  idCart: string | null = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService
  ) {}

  PaymentGroup: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
  });

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.idCart = param.get('id');
        console.log(this.idCart);
      },
    });
  }
  payment(): void {
    this._CartService.CheckOut(this.idCart, this.PaymentGroup.value).subscribe({
      next: (info) => {
        if (info.status == 'success') {
          window.open(info.session.url, '_self');
          this._CartService.ClearCart().subscribe({
            next: (info) => {
              console.log(info);
            },
          });
        }
      },
    });
  }
}
