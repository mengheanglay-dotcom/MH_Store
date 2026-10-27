import { Injectable } from '@angular/core';
declare const Swal: any;

@Injectable({ providedIn: 'root' })
export class CardService {
  private card_item: any[] = this.load();
  private load() {
    try {
      return JSON.parse(localStorage.getItem('card_item') ?? '[]');
    } catch {
      return [];
    }
  }
  private save() {
    localStorage.setItem('card_item', JSON.stringify(this.card_item));
  }
  addtocard(product: any) {
    const item = this.card_item.find((x) => x.id === product.id);
    if (item) item.qty++;
    else this.card_item.push({ ...product, qty: 1, is_select: false });
    this.save();
    if (Swal)
      Swal.fire({
        toast: true,
        position: 'top-end',
        timer: 1200,
        showConfirmButton: false,
        icon: 'success',
        title: 'Added to cart',
      });
  }
  getCarditem() {
    return this.card_item;
  }
  get selectedCount() {
    return this.card_item.filter((item) => item.is_select).length;
  }
  get allSelected() {
    return (
      this.card_item.length > 0 && this.selectedCount === this.card_item.length
    );
  }
  selectAll() {
    this.card_item.forEach((item) => (item.is_select = true));
    this.save();
  }
  clearSelection() {
    this.card_item.forEach((item) => (item.is_select = false));
    this.save();
  }
  incrementqty(item: any) {
    item.qty++;
    this.save();
  }
  decrementqty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.save();
    }
  }
  removecarditem(item: any) {
    const remove = () => {
      this.card_item = this.card_item.filter((x) => x.id !== item.id);
      this.save();
    };
    if (Swal) {
      Swal.fire({
        title: 'Remove item?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#111',
        confirmButtonText: 'Remove',
      }).then((r: any) => {
        if (r.isConfirmed) remove();
      });
    } else remove();
  }
  getcardtotal() {
    return this.card_item
      .filter((x) => x.is_select)
      .reduce((total, x) => total + x.price * x.qty, 0);
  }
  selectCarditem(item: any) {
    item.is_select = !item.is_select;
    this.save();
  }
}
