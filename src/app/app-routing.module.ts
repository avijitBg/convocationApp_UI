import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AttendingComponent } from './attending/attending.component';
import { NotAttendingComponent } from './not-attending/not-attending.component';
import { AdminComponent } from './admin/admin.component';
import { NameComponent } from './name/name.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "attending", component: AttendingComponent},
  {path: "not-attending", component: NotAttendingComponent},
  {path: "admin", component: AdminComponent},
  {path: "name", component: NameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
