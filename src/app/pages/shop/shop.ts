import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { products } from '../../models/products';

@Component({
  selector: 'app-shop',
  imports: [ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {

  products = products;

}