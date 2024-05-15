import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {FormControl, FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlightBookingService } from './FlightService/FlightBookingService';
import { Flight } from 'src/API/Flight';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = [];
  filteredFlights: Flight[] = [];
  filterCriteria: string = '';
  searchQuery: string = '';
  searchText: string = '';
lComplete: boolean = false;
sortingControl = new FormControl('');
  constructor(private flightService:FlightBookingService) { }

  ngOnInit(): void {
    this.getFlightBookingAPI('','')
    this.sortingControl.valueChanges.subscribe((value) => {
      if (value) {
        this.doSorting(value);
      }
    });
  }
  doSorting(value: string){
  
    let sortColumn: string = '';
    let sortType: string = '';
    if (value.toLowerCase() === 'price-by-desc') {
      sortColumn = 'price';
      sortType = 'desc';
    } else if (value.toLowerCase() === 'price-by-asc') {
      sortColumn = 'price';
      sortType = 'asc';
    }
    this.getFlightBookingAPI(sortColumn, sortType);
  }
  getFlightBookingAPI(sortColumn: string, sortType: string): void {
    this.flightService.getFlightList(sortColumn, sortType).subscribe(
      (data: Flight[]) => {
        this.flights = data;
      },
      (error) => {
        console.error('Error fetching flight list', error);
      }
    );
  }
 
 

  // Triển khai phương thức onSearch để xử lý tìm kiếm

  
}
