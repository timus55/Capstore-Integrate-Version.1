import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, ValidatorFn} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import {Customer} from 'src/app/models/customer.model';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editProfileForm: FormGroup;
  submitted: boolean = false;

  username = "dummyCust" // set by token 

  constructor(private formBuilder: FormBuilder, private router: Router,private custservice:CustomerService) { }

  ngOnInit() {
    this.editProfileForm = this.formBuilder.group({
      username: [{ value: '', disabled: true }],
      name: [{ value: '', disabled: true }],
      //phoneNo: ['', Validators.required],
      phoneNo: ['',[ Validators.required,Validators.pattern("[6-9][0-9]{9}")]],
       alternatePhoneNo: ['',[ Validators.required,Validators.pattern("[6-9][0-9]{9}")]],
      alternateEmail: ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      //alternatePhoneNo: ['', Validators.required],
     //alternateEmail: ['',Validators.required],
      gender: [{ value: '', disabled: true }],
      balance: [{ value: '', disabled: true }]
      
    });
    this.custservice.getcustomerdetails(this.username).subscribe(data=>{
      this.editProfileForm.setValue(data);
    })
  }

  editUser() 
  {
    this.submitted = true;

    if (this.editProfileForm.invalid) {
      return;
    }
    this.custservice.editUser(this.editProfileForm.getRawValue()).subscribe(data=>{
      alert(data);
      this.router.navigate(['/customer']);
      console.log(data);
    })
  }

}
