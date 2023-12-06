import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit{

  locationId:string=''
  location:any=[]         //for holding particular product details
  constructor(private viewRoute:ActivatedRoute, private api:ApiService){}

 ngOnInit(): void {
   this.viewRoute.params.subscribe((result:any)=>{
    console.log(result); //locationId: "8"
    console.log(result.locationId);//8
    this.locationId=result.locationId
       
    //fetching particular location details
    this.api.viewLocation(this.locationId).subscribe((result:any)=>{
      console.log(result);
      this.location=result
      
    })
   })
 }

 //add to bucketlist
   addToBucketlist(){
    const{id,name,image,location,contact}=this.location

    this.api.addToBucketlist(id,name,image,location,contact).subscribe((result:any)=>{
      alert(result)
    },
   (result:any)=>{
      alert(result.error)
    })
   }


}
