import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  istoggle = false;
  addnew = true;

  addnewform(form:NgForm){
    form.reset();
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
    console.log(form.value)
    this.istoggle = ! this.istoggle
    this.addnew = ! this.addnew

  }
}
