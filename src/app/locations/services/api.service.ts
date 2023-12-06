import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //to hold search term
  searchTerm=new BehaviorSubject('')

  BASE_URL='http://localhost:5000' //backend url

  constructor( private http:HttpClient ) { }

  //get all locations

  getAllLocations(){
    return this.http.get(`${this.BASE_URL}/locations/all-locations`)
  }

  viewLocation(id:any){
    return this.http.get(`${this.BASE_URL}/locations/viewlocation/${id}`)
  }

  //add to bucketlist
  addToBucketlist(id:any,name:string,image:string,location:string,contact:string){
     
    const body={
      id,name,image,location,contact
    }

    return this.http.post(`${this.BASE_URL}/locations/viewlocation/addtobucketlist`,body)
  }

  //get bicketlist
  getBucketlist(){
    return this.http.get(`${this.BASE_URL}/locations/getbucketlist`)
  }

  //delete bicketlist
  deleteBucketlist(id:any){
    return this.http.delete(`${this.BASE_URL}/locations/getbucketlist/delete/${id}`)
  }

}
