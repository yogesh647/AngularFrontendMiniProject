import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../model/listing';


@Injectable({
  providedIn: 'root'
})

export class ListingService {
  //token=localStorage.getItem("token");
  // http option
  
  
   
 // call to api url
 private ROOT_URL="http://localhost:4000/api/listing";
 token=localStorage.getItem("token");
 
 private httpOptions= {
  
  headers:new HttpHeaders()
  .set("Content-Type","application/json"),
  //.set("auth-token","this.token"),
  Authorization: localStorage.getItem("token")

 };
  constructor(private http:HttpClient) {}

    getListings():Observable <Listing[]>
    {
      
      return this.http.get<Listing[]>(this.ROOT_URL);
     
    }
    getListing(id:string)
    {
       return this.http.get<Listing>(this.ROOT_URL+"/"+id);
    }
    addlisting(listing:any){
      return this.http.post<any>(this.ROOT_URL,listing,this.httpOptions);
    }

    editlisting(listing:any,id:string){
      return this.http.put<any>(this.ROOT_URL+"/"+id,listing,this.httpOptions);
    }

    deleteListing(id:string){
      return this.http.delete<any>(this.ROOT_URL+"/"+id,this.httpOptions);
    }
    
    
}


