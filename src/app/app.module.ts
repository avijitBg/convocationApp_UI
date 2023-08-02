import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { NgSelectModule } from '@ng-select/ng-select';


import { InfoComponent } from './info/info.component';
import { NameComponent } from './name/name.component';
import { AddressComponent } from './address/address.component';
import { EmailComponent } from './email/email.component';
import { ProgramsComponent } from './programs/programs.component';
import { NotAvailableComponent } from './not-available/not-available.component';
import { NotEligibleComponent } from './not-eligible/not-eligible.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AttendingComponent } from './attending/attending.component';
import { NotAttendingComponent } from './not-attending/not-attending.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NameComponent,
    AddressComponent,
    EmailComponent,
    ProgramsComponent,
    NotAvailableComponent,
    NotEligibleComponent,
    HomepageComponent,
    AttendingComponent,
    NotAttendingComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
