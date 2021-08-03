import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { productData } from '../data';
import { Product } from './productInterface';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() productEvent = new EventEmitter<Product>()
  // products = productData;
  products: Product[] | undefined;

  selectedProduct: Product | undefined;

  
  constructor(
    private productsService: ProductsService
  ) {  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe( data => this.products = data )
  }

  detail(id: number){
    this.productsService.getDetail(id)
  }

  handleRemove(id: number): void{
    let confirm = window.confirm("Are you sure to delete this product??")
    if(confirm){
      this.productsService.removeProduct(id).subscribe( data => { 
        this.products = this.products?.filter(item => item.id != data.id)
      })
    }
    // this.productsService.removeProduct(id).subscribe(res => console.log(res));
  }
}
