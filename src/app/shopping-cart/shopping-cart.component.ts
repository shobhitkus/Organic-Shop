import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: ShoppingCart = new ShoppingCart(null);
  shoppingCartItemCount: number;
  // product: Product;
  shoppingCart: ShoppingCart;
  
  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart(product: Product) {
    this.shoppingCartService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.shoppingCartService.removeFromCart(product);
  }

  getQuantity(product: Product) {
    if (!this.cart) { return 0; }

    const item = this.cart.itemsMap[product.key];
    // console.log(this.cart.items);
    return item ? item.quantity : 0;
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
  
  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe( temp => {
      // tslint:disable-next-line:prefer-const
      let data: any;    
      data = temp.payload.child('/items').val();
      // data = temp.payload.val();
      this.cart = new ShoppingCart(data);
      this.shoppingCartItemCount = this.cart.totalItemsCount;
      // console.log('data', data);
      
    });
  }

}
