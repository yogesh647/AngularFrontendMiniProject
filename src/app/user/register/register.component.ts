import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // registration form validation
  registrationForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })

  message:any;
  constructor(private userservice: UserService,private route:Router) { }

  ngOnInit(): void { }

  userRegister(){
    
    if(this.registrationForm.valid)
    {
      //console.log(this.userservice.register(this.registrationForm.value));
      //console.log(this.registrationForm.value);
      this.userservice.register(this.registrationForm.value).subscribe(message => { 
        this.message = message; 
        this.registrationForm.reset();
        this.route.navigate(["/user/login"]);
      });
       
      
    }
  }

}
