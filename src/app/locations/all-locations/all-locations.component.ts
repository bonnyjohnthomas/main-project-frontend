import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.css']
})
export class AllLocationsComponent implements OnInit{

  alllocations:any=[] //to hold all location details

  //to hold search term
  searchTerm:string=''

 constructor(private api:ApiService){}

 ngOnInit(): void {
   this.api.getAllLocations().subscribe((result:any)=>{
    console.log(result);
    this.alllocations=result
    
   })
  //  this.searchTerm=this.api.searchTerm
   this.api.searchTerm.subscribe((result:any)=>{
    this.searchTerm=result;
    console.log(this.searchTerm);
    
   })
 }

}
