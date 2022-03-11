import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;

  constructor(private router:Router) { 
    this.userName="Sonali";
    this.password="vaishnavi"
  }

  ngOnInit(): void {
  }
  login(userName: string,password: string){
    if(this.userName === userName && this.password === password){
      localStorage.setItem("activePageName","dashboard")
      this.router.navigate(["/Main/dashboard"])
    }
  }
}
