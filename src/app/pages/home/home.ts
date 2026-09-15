import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ProductCard } from '../../components/product-card/product-card';
import { products } from '../../models/products';

@Component({
  selector: 'app-home',
  imports: [Hero, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  products = products;
}