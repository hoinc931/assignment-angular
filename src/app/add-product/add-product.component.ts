import { Component, OnInit } from '@angular/core';
import { Product } from '../products/productInterface';
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
    img: ''
  }

  added: Product | undefined;
  constructor( private productsService: ProductsService) {  }

  ngOnInit(): void {  }

  onHandleAdd(){
    if( this.product.name == '' ){
      window.alert("Name is required");
      return;
    }
    this.productsService.addProduct(this.product).subscribe( data => window.alert("Added product successfully."))
  }
}
