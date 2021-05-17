import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROOT_URL="http://localhost:4000/api/user";

  constructor(private http: HttpClient,private router:Router) { }

  // registre user
  register(user:any){
    
     return this.http.post<any>(`${this.ROOT_URL}/register`,user);
  }

  // login user
  login(user:any){
    
    return this.http.post<any>(`${this.ROOT_URL}/login`,user);
 }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/listing"]);
  }
  loggedin(){
    console.log(!!localStorage.getItem("token"));
    return !!localStorage.getItem("token");
  }
}
