import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { trips } from '../data/trips';
import { TripDataService } from 'src/app/services/trip-data.service';
import { Trip } from '../../../models/trip';

@Component({

  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
      
  // trips: Array<any> = trips;
  trips: Trip[];

  message: string;
  
  constructor(
    private tripDataService: TripDataService,
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
  private addTrip(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.router.navigate(['add-trip']);
  }
  private getTrips(): void {
  }
}