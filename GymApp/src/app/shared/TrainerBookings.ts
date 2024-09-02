import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainerbookings } from './trainerbooking.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerBookingsService {
  tData: Trainerbookings = new Trainerbookings();
  tList: Trainerbookings[];
  readonly tApiUrl = "https://localhost:44358/api/TrainerBookings";

  constructor(private objHttp: HttpClient) {}

  getTrainerBookingList(){
    return this.objHttp.get(this.tApiUrl).toPromise().then(res=>this.tList=res as Trainerbookings[]);
  }

  postTrainerBooking(){
    return this.objHttp.post(this.tApiUrl, this.tData);
  }

  deleteTrainerBooking(id: number){
    return this.objHttp.delete(this.tApiUrl+"/"
      +id);
  }

  putTrainerBooking(){
    return this.objHttp.put(this.tApiUrl+"/"+this.tData.BookingId, this.tData);
  }
}
