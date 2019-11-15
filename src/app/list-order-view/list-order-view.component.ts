import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'list-order-view',
  templateUrl: './list-order-view.component.html',
  styleUrls: ['./list-order-view.component.css']
})
export class ListOrderViewComponent implements OnInit {
  orderId;
  


  @Input('orders$') orders$: Observable<unknown>;
  
  constructor(private route: ActivatedRoute,
    private orderService: OrderService) { 

  
}

  ngOnInit() {
  }

}
