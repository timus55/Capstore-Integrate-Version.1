import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from './../../shared/password.validator'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm : FormGroup;
  submitted : boolean = false;
  username = 'shivam';
  errorMessage = '';
  constructor(private formBuilder: FormBuilder,
     private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword:['',Validators.required],
      newPassword: ['', [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      confirmPassword: ['', Validators.required]
    },{ validators : PasswordValidator});
  }
  verifyAndChangePassword(){
    this.submitted = true;
    let oldPassword = this.changePasswordForm.controls.oldPassword.value;
    let newPassword = this.changePasswordForm.controls.newPassword.value;

    this.userService.changePassword(this.username, oldPassword, newPassword).subscribe(data=>{
      if(data){
        alert(`Password Changed`);
        this.router.navigate(['yahadaloLink']);
      }
    },err=>{
      this.errorMessage='Enter correct password'
      this.errorMessage = err.statusText
      console.log(err)
    })
    
    
  }

}
