import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/categories`)
  }

  getCategory(category: string): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }
}
