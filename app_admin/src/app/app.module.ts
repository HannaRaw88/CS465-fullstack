import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TripListingComponent } from 'src/app/data/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from 'src/app/services/trip.data.service';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
   
  ],
  providers: [
    TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }