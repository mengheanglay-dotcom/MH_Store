import { Routes } from '@angular/router';
import { Card } from './card/card';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { ProdustsDetail } from './produsts-detail/produsts-detail';
import { PayNow } from './pay-now/pay-now';
import { ProductPage } from './product-page/product-page';

export const routes: Routes = [
  {
    path: 'card',
    component: Card,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: '',
    component: Home,
  },
  {
    path: 'productsdetail',
    component: ProdustsDetail,
  },
  {
    path: 'paynow',
    component: PayNow,
  },
  {
    path: 'products',
    component: ProductPage,
  },
];
