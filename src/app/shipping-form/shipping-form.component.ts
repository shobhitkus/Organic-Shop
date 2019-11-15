import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { AuthService } from 'src/app/auth.service';
import { OrderService } from 'src/app/order.service';
import { Order } from 'src/app/models/order';
import { ShoppingCart } from 'src/app/models/shopping-cart';


@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {}; 
  userSubscription: Subscription;
  userId;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {}

  ngOnInit() {
    this.userSubscription = 
    this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    // tslint:disable-next-line:prefer-const
    let order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    //console.log(result);
    this.router.navigate(['/order-success', result.key]);
  }    
}
