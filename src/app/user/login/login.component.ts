import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login validation
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  });
  
 
  constructor(private userservice: UserService,private route:Router) { }

  ngOnInit(): void {
  }

  userlogin(){
    if(this.loginForm.valid)
    {
      this.userservice.login(this.loginForm.value).subscribe(
        res => { 
          
          console.log(res);
          localStorage.setItem("token",res.token);
          //console.log(localStorage.getItem("token"));
          this.loginForm.reset();
          this.route.navigate(["/listing"]);
      });
    }
     
  }
}
