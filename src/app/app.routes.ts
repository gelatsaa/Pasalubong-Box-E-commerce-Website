import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Receipt } from './pages/receipt/receipt';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'shop',
    component: Shop
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'checkout',
    component: Checkout
  },
  {
    path: 'receipt',
    component: Receipt
  }
];