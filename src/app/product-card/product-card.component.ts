import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    // console.log(this.product);
    this.cartService.addToCart(this.product);
  }

   removeFromCart() {
    this.cartService.removeFromCart(this.product);
   }

  getQuantity() {
    if (!this.shoppingCart) { return 0; }
    // console.log(this.shoppingCart);
    const item = this.shoppingCart.itemsMap[this.product.key];
    return item ? item.quantity : 0;
  }

}
