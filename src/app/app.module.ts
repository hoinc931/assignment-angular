import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './service/products.service';
import { CategoriesComponent } from './categories/categories.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateProductComponent } from './update-product/update-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    AddProductComponent,
    HomeComponent,
    ProductDetailComponent,
    NotFoundComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
