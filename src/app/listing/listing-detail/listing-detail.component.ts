import { Component, OnInit ,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { Listing } from '../model/listing';
import { ListingService } from '../service/listing.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit, OnDestroy{

  // edit form validation
  EditForm=new FormGroup({
    title:new FormControl("",[Validators.required]),
     price:new FormControl("",[Validators.required]),
     locality:new FormControl("",[Validators.required]),
     details:new FormControl("",[Validators.required])
  })

  showform!:boolean;
  id:any;
  
  listing!:Listing;
  listingSub$!:Subscription;


  constructor(private listingService:ListingService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.paramMap.get("id");
     
    this.listingSub$=this.listingService.getListing(this.id).subscribe(
      
        listing=>{
          this.listing=listing;
        });
    
  }
  
  // destory subscription
  ngOnDestroy():void{
    this.listingSub$.unsubscribe();
  }

  showEdit(){
     this.showform=!this.showform;
  }
  editlisting(){
     if(this.EditForm.valid){

      this.listingService.editlisting(this.EditForm.value,this.id).subscribe(
        res => { 
          
          console.log(res);
         // localStorage.setItem("token",res.token);
          //console.log(localStorage.getItem("token"));
          this.EditForm.reset();
          this.router.navigate(["/listing"]);
      });
     }
  }

  removelist(){

    this.listingService.deleteListing(this.id).subscribe(
      res => { 
        
        console.log(res);
       // localStorage.setItem("token",res.token);
        //console.log(localStorage.getItem("token"));
        this.EditForm.reset();
        this.router.navigate(["/listing"]);
    });
   }

  

}
