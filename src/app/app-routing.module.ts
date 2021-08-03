import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  { path: 'categories', component: CategoriesComponent},
  {path: 'product/:id/detail', component: ProductDetailComponent},
  { path: 'product-add', component: AddProductComponent},
  { path: 'product-update/:id', component: UpdateProductComponent},

  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
