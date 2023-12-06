import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { ViewLocationComponent } from './view-location/view-location.component';
import { AllLocationsComponent } from './all-locations/all-locations.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';

const routes: Routes = [
  { 
    path: '', component: AllLocationsComponent 
  },
  
  {
    path: 'viewlocation/:locationId', component:   ViewLocationComponent
  },
  
  {
    path: 'bucketlist', component:  BucketListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
