import { Injectable } from '@angular/core';
import { productData } from '../data';
import { Category, Product } from '../products/productInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API: string = 'https://60ef93eaf587af00179d3a4d.mockapi.io/categories';

  constructor( private http: HttpClient) { }

  getProducts(cateId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API}/${cateId}/products`);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.API}/${product.categoryId}/products`, product)
  }

  getDetail(idCate: number, id: number): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${idCate}/products/${id}`)
  }

  removeProduct(id :number, idCate: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${idCate}/products/${id}`);
  }

  updateProduct(cate: any, data: any ): Observable<Product>{
    return this.http.put<Product>(`${this.API}/${cate.id}/products/${data.id}`, data)
  }
}
