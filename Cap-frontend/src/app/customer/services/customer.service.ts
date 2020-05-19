import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/models/orders.model';
import { address } from 'src/app/models/address.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Customer} from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "http://localhost:9001";

  ShareOrder:Order={
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
  constructor(private http: HttpClient) { }

  public saveOrder(order:Order){ //sumit
    this.ShareOrder= order;
  }
  public getOrder(){  //sumit
    return this.ShareOrder;
  }
  public getMyOrders(username:String){  //sumit
    return this.http.get<Order[]>(`${this.baseUrl}/myorders/${username}`);
  }
  public getStatus(username:String,orderId:number){ //sumit
    return this.http.get<String>(`${this.baseUrl}/getStatus/${username}/${orderId}`);
  }
  public updateStatus(username:String,orderId:number,status:String){  //sumit
    return this.http.get<Boolean>(`${this.baseUrl}/updateStatus/${username}/${orderId}/${status}`);
  }
  addAddress(add:address,userName:String) //sagar
  {
    return this.http.post(`${this.baseUrl}/addAddress/${userName}`,add);
  }
  viewAddress(userName:String){ //sagar
    return this.http.get<address[]>(`${this.baseUrl}/viewAddress/${userName}`);
  }
  deleteAddress(addressId:number){  //sagar
    return this.http.get(`${this.baseUrl}/deleteAddress/${addressId}`);
  }

  public getcustomerdetails(username:string) //prajakta
  {
    console.log(localStorage.username);
    return this.http.get<Customer>(`${this.baseUrl}/getUserDetails/${username}`);
  }

  public editUser(cust:Customer)//prajakta
  {
   return this.http.put(this.baseUrl+"editUser?",cust,{responseType:'text'})
  }
}
