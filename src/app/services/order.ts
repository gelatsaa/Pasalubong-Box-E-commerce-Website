import { Injectable } from '@angular/core';
import { CartItem } from './cart';

export interface Order {
  orderId: string;
  orderDate: Date;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  items: CartItem[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  lastOrder: Order | null = null;

  createOrder(
    fullName: string,
    email: string,
    phone: string,
    address: string,
    items: CartItem[],
    total: number
  ) {

    this.lastOrder = {
      orderId: 'PB-' + Math.floor(1000 + Math.random() * 9000),
      orderDate: new Date(),
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
      items: [...items.map(item => ({ ...item }))],
      total: total
    };

  }
}