import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-checkout',
  imports: [RouterLink, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  fullName = '';
  email = '';
  phone = '';
  address = '';

  constructor(
    public cart: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  get cartItems(): CartItem[] {
    return this.cart.getCartItems();
  }

  get total(): number {
    return this.cart.getTotal();
  }

  placeOrder() {

    if (!this.fullName || !this.email || !this.phone || !this.address) {
      alert('Please complete all customer information.');
      return;
    }

    this.orderService.createOrder(
      this.fullName,
      this.email,
      this.phone,
      this.address,
      this.cartItems,
      this.total
    );

    this.cart.clearCart();

    this.router.navigate(['/receipt']);
  }
}
