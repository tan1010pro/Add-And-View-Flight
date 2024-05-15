import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Flight } from 'src/API/Flight';
import axios from 'axios';
import { catchError, from } from 'rxjs';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingService {
 apiLink = 'http://localhost:3000/flights';
 
  constructor(private http:HttpClient,public messageService:MessageService) { }
  ngOnInit(): void {
   
  }
  getFlightList(sortColumn: string, sortType: string): Observable<Flight[]> {
    this.log("Fetch Flights", 'info');
  
    let apiUrl = this.apiLink;  // Initialize apiUrl with the base apiLink
  
    if (sortColumn && sortType) {
      const sortParam = sortType === 'desc' ? `-${sortColumn}` : sortColumn;
      apiUrl += `?_sort=${sortParam}`;
    }
  
    return this.http.get<Flight[]>(apiUrl);
  }
  

  getById(id: number): Observable<Flight> {
    this.log("Fetch Flight With Id ="+`${id}`)
    return this.http.get<Flight>(
      this.apiLink+'/'+`${id}`
    );
  }
  addFlight(payload: Flight): Observable<any> {
    return from(axios.post(this.apiLink, payload))
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  private log(message: string | object, _type: 'error' | 'info' = 'info') {
    const messageType = _type === 'error' ? 'error' : 'info';
    const messageString = typeof message === 'string' ? message : JSON.stringify(message);
    this.messageService.add(`FlightBookingService: ${messageString}`, messageType);
  }
  
}
