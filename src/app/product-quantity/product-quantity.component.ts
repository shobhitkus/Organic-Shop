import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
     if (!this.shoppingCart) { return 0; }

     const item = this.shoppingCart.itemsMap[this.product.key];
     return item ? item.quantity : 0;
  }
}
