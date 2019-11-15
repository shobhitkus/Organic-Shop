import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  orderId;
  orderDate:String;
  orders: Observable<any>;
  date:boolean;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService) { 

    }

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.orderDate = this.route.snapshot.paramMap.get('date');
    this.orders = this.orderService.getOrdersByUser(this.orderId);
  }


}
