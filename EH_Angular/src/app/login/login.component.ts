import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { LoginService } from './login.service';
import { Router } from "@angular/router";

export class Login {
  email_id: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  LoginObj = new Login();
  LoginForm;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email_id: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {

    this.LoginObj.email_id = this.LoginForm.controls.email_id.value;
    this.LoginObj.password = this.LoginForm.controls.password.value;
    this.loginService.Login({ "email_id": this.LoginObj.email_id, "password": this.LoginObj.password }).subscribe((data: any) => {
      if (data == true) {
        this.router.navigate(["home/userlist"]);
      } else {
        alert("Invalid Username or Password");
      }
    });

  }

}
