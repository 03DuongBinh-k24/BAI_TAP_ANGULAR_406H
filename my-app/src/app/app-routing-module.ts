import { NgModule, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { CatalogComponent } from './catalog/catalog';
import { GroupCustomersComponent } from './group-customers/group-customers';

const routes: Routes = [
  {path:"Bai13",component:ServiceProductImageEventComponent},
  {path:"Bai13/:id",component:ServiceProductImageEventDetailComponent},
  {path:"Bai14",component:CatalogComponent},
  {path:"Bai18",component:GroupCustomersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
