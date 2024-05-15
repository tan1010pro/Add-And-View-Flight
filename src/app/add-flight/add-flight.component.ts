import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightBookingService } from '../flight-list/FlightService/FlightBookingService';
import { Router } from '@angular/router';
import { Flight } from 'src/API/Flight';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  addFlightForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private flightService: FlightBookingService,
    private router: Router
  ) {
    // Initialize addFlightForm with the desired form controls and validators
    this.addFlightForm = this.fb.group({
      flightId: [Math.floor(Math.random() * 10000)],
      flightNumber: ['', Validators.required],
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      departureTime: [new Date()],
      arrivalTime: [new Date()],
      totalSeats: ['', Validators.required],
      price: ['', Validators.required]
    });

    
  }
  createFlight() {
    if(this.addFlightForm.invalid){return;}
    this.flightService.addFlight(this.addFlightForm.value as unknown as Flight)
      .subscribe(() => {
        this.router.navigate(['/flights']);
      }, error => {
        console.error('Error adding flight:', error);
        // Handle error
      });
  }
  onInputChange(event: any) {
    const inputValue = event.target.value;
    // Remove any non-numeric characters from the input value
    const numericValue = inputValue.replace(/\D/g, '');
    // Update the form control value with the sanitized numeric value
    this.addFlightForm.patchValue({ totalSeats: numericValue });
  }
  onInputChange1(event: any) {
    const inputValue = event.target.value;
    // Remove any non-numeric characters from the input value
    const numericValue = inputValue.replace(/\D/g, '');
    // Update the form control value with the sanitized numeric value
    this.addFlightForm.patchValue({ price: numericValue });
  }
}
