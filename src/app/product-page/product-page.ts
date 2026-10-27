import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../products/products';
import { CardService } from '../service/card-service';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-product-page',
  imports: [Products, FormsModule],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  search = '';
  category = 'all';
  sort = 'featured';
  constructor(
    public cardService: CardService,
    public productService: ProductService,
  ) {}
  get categories() {
    return [
      ...new Set(this.productService.getProduct().map((p: any) => p.category)),
    ];
  }
  get filteredProducts() {
    let items = [...this.productService.getProduct()];
    const q = this.search.trim().toLowerCase();
    if (q)
      items = items.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    if (this.category !== 'all')
      items = items.filter((p) => p.category === this.category);
    if (this.sort === 'low') items.sort((a, b) => a.price - b.price);
    if (this.sort === 'high') items.sort((a, b) => b.price - a.price);
    if (this.sort === 'name')
      items.sort((a, b) => a.title.localeCompare(b.title));
    return items;
  }
  addtocard(product: any) {
    this.cardService.addtocard(product);
  }
}
