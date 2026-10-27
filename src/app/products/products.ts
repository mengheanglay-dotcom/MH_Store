import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToKHRPipe } from '../custom-pipes/to-khr-pipe';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, RouterLink, ToKHRPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  @Input() product: any;
  @Output() onAddtoCard = new EventEmitter<any>();
  addtocard(product: any) {
    this.onAddtoCard.emit(product);
  }
}
