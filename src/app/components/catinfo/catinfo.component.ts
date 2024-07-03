import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/service/product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categories } from 'src/app/core/interface/categories';

@Component({
  selector: 'app-catinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catinfo.component.html',
  styleUrls: ['./catinfo.component.scss'],
})
export class CatinfoComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  cat: Categories = {
    name: '',
    image: '',
  };
  id: any = '';
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('_id');
      },
    });
    this._ProductService.getSubCategories(this.id).subscribe({
      next: (response) => {
        this.cat = response.data;
        console.log(response);
      },
    });
  }
}
