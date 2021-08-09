import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../products/productInterface';
import { CategoriesService } from '../service/categories.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[] | undefined;
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categoriesService.getCate().subscribe( dataCate => { 
      dataCate.map(item => this.productsService.getProducts(item.id.toString()).subscribe(dataProduct => {
        this.products = [...this.products, ...dataProduct];
      }))
     });
  }
}
