import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import {MatSelectModule} from '@angular/material/select';


import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm! : FormGroup;
  istoggle = false;

  constructor(private authService: AuthService, private router: Router ) {}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
    console.log(this.signupForm!)
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(1)]),
      middleName: new FormControl("", [Validators.required, Validators.minLength(1)]),
      address: new FormControl("", [Validators.required, Validators.minLength(2)]),
      phoneNumber: new FormControl("", [Validators.required, Validators.minLength(10)]),
      country: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required, Validators.minLength(2)]),
      pincode: new FormControl("", [Validators.required, Validators.minLength(6)]),
      height: new FormControl("", [Validators.required, ]),
      weight: new FormControl("", [Validators.required, ]),
    });
  }

  signup(): void {
    console.log(this.signupForm!.value)
    this.istoggle = ! this.istoggle;
    this.authService.signup(this.signupForm!.value).subscribe((msg) => {
      console.log(msg);
      this.router.navigate(["login"]);
      
    });
  }
  login(): void{
    this.istoggle = ! this.istoggle;
    this.router.navigate(["signup"]);
  }
}