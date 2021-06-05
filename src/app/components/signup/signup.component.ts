import { formatCurrency } from '@angular/common';
import { Component, NgModule,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent {

  
  constructor(private authService: AuthService, private router: Router) {}



  istoggle = false;
  addnew = true;
  hidestate = true;

  addnewform(form:NgForm){
    this.router.navigate(["login"]);
  }
  
  statechange(form:NgForm){
    if (form.value.country == "India"){
      this.hidestate =! this.hidestate
    }
    console.log("changed")

  }

  // user ={
  //   Firstname: '',
  //   Lastname: '',
  //   Middlename: '',
  //   Address: '',
  //   Email: '',
  //   Phonenumber: '',
  //   Height: '',
  // }
  onSubmit(form:NgForm){
    this.authService.signup(form.value).subscribe((msg) => {
      console.log(msg);
     
    });
    console.log(form.value)
    this.istoggle = ! this.istoggle
    this.addnew = ! this.addnew

  }
}
