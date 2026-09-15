import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product!: Product;

  constructor(private cart: CartService) {}

  addToCart() {
    this.cart.addToCart(this.product);
    alert(`${this.product.name} added to cart!`);
  }
}