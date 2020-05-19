import { Component, OnInit } from '@angular/core';
// import { OrderslistService } from '../services/orderslist.service';
import { CustomerService} from '../services/customer.service';
import { Order } from 'src/app/models/orders.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orders:Order []= []
  order1:Order = {
    address:null,
    customer: null,
    orderAmount: null,
    orderDate: null,
    orderId: 0,
    orderStatus: null,
    product: null,
    quantity: 0,
    statusDate: null,
    transaction:null
    }
  // constructor(private orderservice:OrderslistService) { }
  searchText:string;
  view:boolean=true;
  
  username='svn2@gmail.com'

  constructor(private customerService : CustomerService,private router:Router){

  }
  ngOnInit() {
     console.log("In OnInit Block")
    this.customerService.getMyOrders(this.username).subscribe(data=>{
      this.orders=data;
      console.log(this.orders);
    },err=>{
      console.log(err)
    })
  }

  orderStatus(order:Order){
    console.log(order)
    this.order1 = order;
  }

  toggleViewList(){
    this.view=false;
    console.log(this.view)
  }
  toggleViewCard()
  {
    this.view=true;
    console.log(this.view)
  }
  viewDetails(order:Order)
  {
    this.customerService.saveOrder(order);
    this.router.navigate(['customer/return']);
  }
  
}
