import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardService } from '../service/card-service';
declare const axios: any;
@Component({
  selector: 'app-produsts-detail',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './produsts-detail.html',
  styleUrl: './produsts-detail.css',
})
export class ProdustsDetail {
  product: any = {};
  constructor(
    private route: ActivatedRoute,
    public cardService: CardService,
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('product_id');
    if (!id) return;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((r: any) => (this.product = r.data))
      .catch(() => (this.product = {}));
  }
  addtocard(product: any) {
    this.cardService.addtocard(product);
  }
}
