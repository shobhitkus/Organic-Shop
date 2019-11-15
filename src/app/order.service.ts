import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private db: AngularFireDatabase) { }

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders').valueChanges();
  }

  getOrdersByUser(userId) {
    return this.db.list('/orders', 
    ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }  
  getOrderById(orderId: string) {
  //return this.db.object('/orders/' + orderId).valueChanges();
  return this.db.object('/orders')
  .snapshotChanges().pipe(
    map(a => ({ key: a.payload.key, ...a.payload.val() }))
    );
  }
}
