import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Product } from '../products/productInterface';
import { CategoriesService } from '../service/categories.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  product: Product | undefined;
  categories: Category[] | undefined;
  cate: Category | undefined;

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private productService: ProductsService, 
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      params = params.id.split('-');
      this.productService.getDetail(params[0], params[1]).subscribe( dataProduct => {
        this.product = dataProduct;
        this.categoriesService.getCate().subscribe( data => {
          this.categories = data.filter(item => item.id != this.product?.categoryId)
          this.cate = data.filter(item => item.id == this.product?.categoryId)[0];
        })
      })
    })
   }

  ngOnInit(): void {
    
  }

  handleUpdate(){
    if(this.product !== undefined || this.cate !== undefined){
      this.productService.updateProduct(this.cate, this.product).subscribe(data => {
        console.log('successfully, data: ', data)
        this.router.navigate(['/products'])
      })
    }
  }
}
