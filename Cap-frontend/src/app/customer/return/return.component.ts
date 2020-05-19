import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/orders.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

 order:Order;
 username = "svn2@gmail.com" // set by token 
 isCouponApplied:any ;
 message:string="";

  constructor(private customerService : CustomerService,private router:Router) { }

  ngOnInit() {
    this.order = this.customerService.getOrder();
    this.customerService.getStatus(this.username,this.order.orderId).subscribe(data=>{
      console.log(data);
      this.isCouponApplied = data;
    })
  }

  return(){

    if(this.isCouponApplied == "false"){
      this.customerService.updateStatus(this.username,this.order.orderId,"Request For Return").subscribe(data=>{
      console.log(data);
      })

      this.message = "Your Order is requested for Return";

      this.router.navigate(['customer/orderlist'])
    }
    else{
      this.message = "Cannot Return as the Coupan was applied on given order";
      alert("Cannot Return as the Coupan was applied on given order")
    }
  }

  cancel(){
 
    if(this.isCouponApplied == "false"){
      this.customerService.updateStatus(this.username,this.order.orderId,"Request For Cancellation").subscribe(data=>{
      console.log(data);
      })

      this.message = "Your Order is requested for Cancelliation";
      this.router.navigate(['customer/orderlist'])
    }
    else{
      this.message = "Cannot Cancel as the Coupoun was applied on this order";
      alert("Cannot Cancel as the Coupoun was applied on this order")
    }
  }


}
