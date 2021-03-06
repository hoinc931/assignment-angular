import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products/productInterface';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductsService) {
    this.activatedRoute.params.subscribe(params => {
      params = params.id.split('-')
      this.productService.getDetail(params[0], params[1]).subscribe( data => {
        this.product = data
      })
    })
  }

  ngOnInit(): void {
  }

}
