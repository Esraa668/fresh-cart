import { HttpClient } from '@angular/common/http';
import { ProductService } from './../../core/service/product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  constructor(private _ProductService: ProductService) {}
  brands: any[] = [];
  ngOnInit(): void {
    this._ProductService.getbrands().subscribe({
      next: (info) => {
        this.brands = info.data;
        console.log(this.brands);
      },
    });
  }
}
