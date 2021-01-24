import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../user.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  dateOfBirth: string;
  isActive: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  UserObj = new User();
  action = "Add"
  UserForm;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.min(2),
        Validators.max(300),
        Validators.pattern('[a-zA-Z ]*')])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.min(2),
        Validators.max(300),
        Validators.pattern('[a-zA-Z ]*')])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.min(2),
        Validators.max(300),
        Validators.email])],
      mobileNo: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      dateOfBirth: ['', Validators.required],
      isActive: ["1"],
    });

    //patch
    let id = this.route.snapshot.paramMap.get("id");
    if (id == undefined) {
      this.action = "Add"
    } else {
      this.action = "Update"
      var userdata: any = {};
      userdata.id = id;

      this.userService.ReadUserById(userdata).subscribe((data: any) => {
        data[0].isActive = data[0].isActive.toString();
        this.UserForm.patchValue(data[0]);
      });

    }
  }

  onSubmit(): void {

    if (this.UserForm.status == "INVALID") {
      alert("Please enter valid data");
      return;
    }

    this.UserObj.firstName = this.UserForm.controls.firstName.value;
    this.UserObj.lastName = this.UserForm.controls.lastName.value;
    this.UserObj.email = this.UserForm.controls.email.value;
    this.UserObj.mobileNo = this.UserForm.controls.mobileNo.value;
    this.UserObj.dateOfBirth = this.UserForm.controls.dateOfBirth.value;
    this.UserObj.isActive = this.UserForm.controls.isActive.value;


    this.userService.CreateUser(this.UserObj).subscribe((data: any) => {
      if (data == 1) {
        alert("User created successfully");
        this.router.navigate(['home/userlist']);

      } else {
        alert("User Cannot be created");
      }
    });
  }

  onUpdate(): void {
    if (this.UserForm.status == "INVALID") {
      alert("Please enter valid data");
      return;
    }
    let id = this.route.snapshot.paramMap.get("id");
    this.UserObj.id = parseInt(id);
    this.UserObj.firstName = this.UserForm.controls.firstName.value;
    this.UserObj.lastName = this.UserForm.controls.lastName.value;
    this.UserObj.email = this.UserForm.controls.email.value;
    this.UserObj.mobileNo = this.UserForm.controls.mobileNo.value;
    this.UserObj.dateOfBirth = this.UserForm.controls.dateOfBirth.value;
    this.UserObj.isActive = this.UserForm.controls.isActive.value;

    this.userService.UpdateUser(this.UserObj).subscribe((data: any) => {
      if (data == 1) {
        alert("User updated successfully");
        this.router.navigate(['home/userlist']);

      } else {
        alert(data.message);
      }
    });

  }

  onCancel(): void{
    this.router.navigate(["home/userlist"]);
  }

}
