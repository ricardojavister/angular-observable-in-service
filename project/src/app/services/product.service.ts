import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Product[] = [];
  private myProducts = new BehaviorSubject<Product[]>([]);
  myProducts$ = this.myProducts.asObservable();

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url ='http://127.0.0.1:5500/fruits.json'
    return this.httpClient.get<Product[]>(
      url
    );
  }
}
