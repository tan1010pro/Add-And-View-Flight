import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/API/Flight';
import { FlightBookingService } from '../flight-list/FlightService/FlightBookingService';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent {
  flight: Flight | undefined ;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightBookingService,

) {}

  ngOnInit(): void {
    this.getFlight();

  }
  getFlight(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.flightService.getById(id)
      .subscribe(flight => {this.flight = flight

       
      });
   
  }
  
}
