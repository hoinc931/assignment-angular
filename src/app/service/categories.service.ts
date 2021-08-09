import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../products/productInterface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API: string = 'https://60ef93eaf587af00179d3a4d.mockapi.io/categories'

  constructor( private httpClient: HttpClient) { }

  getCate(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API);
  }
}
