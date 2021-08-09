import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { productData } from '../data';
import { Category, Product } from './productInterface';
import { ProductsService } from '../service/products.service';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() productEvent = new EventEmitter<Product>()
  // products = productData;
  products: Product[] | undefined;
  categories: Category[] | undefined;

  selectedProduct: Product | undefined;
  a: string = '1';
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {  }

  ngOnInit(): void {
    this.productsService.getProducts(this.a).subscribe( (data) => this.products = data );
    this.categoriesService.getCate().subscribe( (data) => {
      this.categories = data;
      this.productsService.getProducts(data[0].id.toString()).subscribe(dataProduct => this.products = dataProduct)
    })
  }

  // detail(id: number){
  //   this.productsService.getDetail(id)
  // }

  changeProduct(cateId: number){
    this.productsService.getProducts(cateId.toString()).subscribe(dataProduct => this.products = dataProduct)
  }

  handleRemove(product: any): void{
    let confirm = window.confirm("Are you sure to delete this product??")
    if(confirm){
      this.productsService.removeProduct(product.id, product.categoryId).subscribe( data => { 
        this.products = this.products?.filter(item => item.id != data.id)
      })
    }
    // this.productsService.removeProduct(id).subscribe(res => console.log(res));
  }
}
