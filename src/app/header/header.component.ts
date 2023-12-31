import { Component } from '@angular/core';
import { ApiService } from '../locations/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private api:ApiService){}

  //to hold search term
  searchTerm:string=''

  search(event:any){
      console.log(event.target.value); //search value
    this.api.searchTerm.next(event.target.value)
      
  }
}
