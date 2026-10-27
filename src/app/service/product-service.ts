import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ProductService {
  private product: any[] = [];
  constructor() {
    fetch('https://fakestoreapi.com/products')
      .then((r) => r.json())
      .then((data) => (this.product = data))
      .catch(() => (this.product = []));
  }
  getProduct() {
    return this.product;
  }
}
