import { ProductService } from 'src/app/core/service/product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categories } from 'src/app/core/interface/categories';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductService: ProductService) {}
  categories: Categories[] = [];

  ngOnInit(): void {
    this._ProductService.getcategories().subscribe({
      next: (value) => {
        this.categories = value.data;
      },
    });
  }
}
