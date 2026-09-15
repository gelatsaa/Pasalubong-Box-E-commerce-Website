import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-receipt',
  imports: [RouterLink, DatePipe],
  templateUrl: './receipt.html',
  styleUrl: './receipt.css'
})
export class Receipt {

  constructor(public orderService: OrderService) {}

  get order() {
    return this.orderService.lastOrder;
  }

  printReceipt() {
    setTimeout(() => {
      window.print();
    }, 100);
  }
}