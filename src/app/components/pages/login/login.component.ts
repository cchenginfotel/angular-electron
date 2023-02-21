import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup
  _username: FormControl
  _password: FormControl
  hidePassword: boolean
  router: Router;
  route: ActivatedRoute;
  LOGIN_TEXT: string = "Login to CanReg";

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  
  ngOnInit() {
    this.hidePassword = true;
    this._username = new FormControl("", [Validators.required]);
    this._password = new FormControl("", [Validators.required]);

    this.loginForm = this._formBuilder.group({
      username: this._username,
      password: this._password
    });
  }

  submit() {
    console.log(this._username.value);
    console.log(this._password.value);
    this.authService.connect(this._username.value, this._password.value);
    this.router.navigate(["home"], { relativeTo: this.route });
  }

  togglePasswordDisplay() {
    this.hidePassword = !this.hidePassword;
    console.log("Show password status: "+this.hidePassword);
  }
}
