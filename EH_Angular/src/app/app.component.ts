import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from "@angular/router";
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ELH Assignment';  

  constructor(private router: Router,private loginService: LoginService) {    

  }

}
