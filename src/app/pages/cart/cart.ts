import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  constructor(public cart: CartService) {}

  get cartItems(): CartItem[] {
    return this.cart.getCartItems();
  }

  increaseQuantity(index: number) {
    this.cart.increaseQuantity(index);
  }

  decreaseQuantity(index: number) {
    this.cart.decreaseQuantity(index);
  }

  removeItem(index: number) {
    this.cart.removeFromCart(index);
  }

  clearCart() {
    this.cart.clearCart();
  }

  get total(): number {
    return this.cart.getTotal();
  }
}