import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products/productInterface';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  product: Product | undefined;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getDetail(params.id).subscribe( data => {
        this.product = data
      })
    })
   }

  ngOnInit(): void {
  }

  handleUpdate(){
    if(this.product !== undefined){
      this.productService.updateProduct(this.product).subscribe(data => {
        console.log('successfully, data: ', data)
        this.router.navigate(['/products'])
      })
    }
  }
}
