import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingService } from '../service/listing.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  
  // add listing
  listingform=new FormGroup({
     title:new FormControl("",[Validators.required]),
     price:new FormControl("",[Validators.required]),
     locality:new FormControl("",[Validators.required]),
     details:new FormControl("",[Validators.required])
  });
  

  
  constructor(private listingService:ListingService,private route:Router) { }

  ngOnInit(): void {
  }
  newlisting(){
    if(this.listingform.valid)
    {
      this.listingService.addlisting(this.listingform.value).subscribe(
        res => { 
          
          console.log(res);
          //localStorage.setItem("token",res.token);
          //console.log(localStorage.getItem("token"));
          this.listingform.reset();
          this.route.navigate(["/listing"]);
      });

  }
  }
}
