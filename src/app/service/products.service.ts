import { Injectable } from '@angular/core';
import { productData } from '../data';
import { Product } from '../products/productInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = productData;
  API: string = 'https://60ef93eaf587af00179d3a4d.mockapi.io/products';

  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.API, product)
  }

  getDetail(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  removeProduct(id :number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }

  updateProduct(data: Product): Observable<Product>{
    return this.http.put<Product>(`${this.API}/${data.id}`, data)
  }
}
