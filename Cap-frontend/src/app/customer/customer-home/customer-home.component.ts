import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import {Customer} from 'src/app/models/customer.model';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import { $ } from 'protractor';
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  submitted:boolean=false;
  getcust:Customer;

  constructor(private router:Router,private custservice:CustomerService) { }

  ngOnInit() {
  
    this.getuser()
  }

  public getuser(){
    this.custservice.getcustomerdetails("dummyCust").subscribe(data=>{
        console.log(data);
        this.getcust=data;
    })
  }

}
