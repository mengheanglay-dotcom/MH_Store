import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CardService } from '../service/card-service';
declare const Swal: any;
@Component({
  selector: 'app-pay-now',
  imports: [CurrencyPipe],
  templateUrl: './pay-now.html',
  styleUrl: './pay-now.css',
})
export class PayNow {
  constructor(public cardService: CardService) {}
  getTotal() {
    return this.cardService
      .getCarditem()
      .filter((x) => x.is_select)
      .reduce((sum, x) => sum + x.price * x.qty, 0);
  }
  paynow() {
    if (this.getTotal() === 0) {
      Swal.fire({ title: 'Select an item first', icon: 'info' });
      return;
    }
    Swal.fire({
      title: 'Order confirmed',
      text: 'Thank you for shopping with ISNAV.',
      icon: 'success',
      confirmButtonColor: '#111',
    });
  }
}
