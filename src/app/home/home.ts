import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../products/products';
import { CardService } from '../service/card-service';
import { ProductService } from '../service/product-service';
import { Slide } from '../slide/slide';

@Component({
  selector: 'app-home',
  imports: [Products, Slide, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    public cardService: CardService,
    public productService: ProductService,
  ) {}
  addtocard(product: any) {
    this.cardService.addtocard(product);
  }
}
