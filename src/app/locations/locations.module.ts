import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { AllLocationsComponent } from './all-locations/all-locations.component';
import { ViewLocationComponent } from './view-location/view-location.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    LocationsComponent,
    AllLocationsComponent,
    ViewLocationComponent,
    BucketListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
