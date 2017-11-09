import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


import {ListContactService} from "./list-contact.service";
import { ContactListComponent } from './contact-list/contact-list.component';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactListComponent,
    DetailsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [ListContactService],

  bootstrap: [AppComponent]
})

export class AppModule { }
