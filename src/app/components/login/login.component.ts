import { Component, NgModule, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

import { Observable } from "rxjs";
import { User } from "src/app/models/User";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})

export class LoginComponent implements OnInit {
  users$!: Observable<User[]>;
  userId!: Pick<User, "id">;


  constructor(private authService: AuthService) {
    
  }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
    
    this.users$! = this.fetchAll();
    this.userId! = this.authService.userId;
  }

  fetchAll(): Observable<User[]> {
    return this.authService.fetchAll();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
      
    });
  }

  delete(postId: Pick<User, "id">): void {
    this.authService
      .deletePost(this.userId)
      .subscribe(() => (this.users$ = this.fetchAll()));
  }

  

  login(): void {
    this.fetchAll();
    this.delete(this.userId)
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe();
  }
}