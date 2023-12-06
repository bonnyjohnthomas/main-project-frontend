import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent  implements OnInit{

  allbucketlist:any=[]

  constructor(private api:ApiService){}

 ngOnInit(): void {
   this.api.getBucketlist().subscribe((result:any)=>{
    console.log(result);
    this.allbucketlist=result
    
   },
   (result:any)=>{
    console.log(result.error);
    
   })
 }

 deletebucketlist(id:any){
  return this.api.deleteBucketlist(id).subscribe((result:any)=>{
    this.allbucketlist=result
    alert('location suceesfully deleted')
  },
  (result:any)=>{
    alert(result.error)
  })
 }

}
