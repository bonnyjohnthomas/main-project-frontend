import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
   path: 'locations', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule)
   },
  {
    path:'',redirectTo:"locations",pathMatch:'full'
  },
  {
    path:"**",component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
