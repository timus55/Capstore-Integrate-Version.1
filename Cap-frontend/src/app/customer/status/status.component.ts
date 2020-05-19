import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../services/customer.service';
import { Order } from 'src/app/models/orders.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  orders:Order []= []
  username = "dummyCust"
  constructor(private customerService : CustomerService){  }

  ngOnInit() {
  }

  display(){
    console.log("In Display Block")
    this.customerService.getMyOrders(this.username).subscribe(data=>{
      this.orders=data;
      console.log(this.orders);
    },err=>{
      console.log(err)
    })
  }

}
