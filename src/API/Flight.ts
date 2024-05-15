export interface Flight {
  flightId: number;
  flightNumber: string;
  departure: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  totalSeats: number;
  price : number
  id:string
   // Ensure this is included
}