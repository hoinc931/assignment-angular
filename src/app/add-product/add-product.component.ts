import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Product } from '../products/productInterface';
import { CategoriesService } from '../service/categories.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = {
    // id: Math.floor(Math.random()),
    id: Math.floor((1 + Math.random()) * 0x10000),
    name: '',
    description: '',
    status: true,
    image: null,
    categoryId: 0
  };

  categories: Category[] | undefined;

  added: Product | undefined;
  constructor( 
    private productsService: ProductsService, 
    private router: Router, 
    private categoriesService: CategoriesService
  ) {  
    this.categoriesService.getCate().subscribe( data => this.categories = data)
  }

  ngOnInit(): void {  }

  onHandleAdd(){
    if( this.product.name == '' ){
      window.alert("Name is required");
      return;
    }
    
    this.productsService.addProduct(this.product).subscribe( data => {
      if(data){
        this.router.navigate(['/products'])
      }
    })
  }
}
