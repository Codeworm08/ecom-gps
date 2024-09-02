import { Injectable } from '@angular/core';
import { TrainerBooking } from './trainer-booking.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerBookingsService {
  tData: TrainerBooking = new TrainerBooking();
  tList: TrainerBooking[];
  readonly tApiUrl = "https://localhost:44358/api/TrainerBookings";

  constructor(private objHttp: HttpClient) {}

  getTrainerBookingList(): Observable<TrainerBooking[]> {
    return this.objHttp.get<TrainerBooking[]>(this.tApiUrl);
  }

  postTrainerBooking(): Observable<TrainerBooking> {
    return this.objHttp.post<TrainerBooking>(this.tApiUrl, this.tData);
  }

  deleteTrainerBooking(id: number): Observable<void> {
    return this.objHttp.delete<void>(${this.tApiUrl}/${id});
  }

  putTrainerBooking(): Observable<TrainerBooking> {
    return this.objHttp.put<TrainerBooking>(${this.tApiUrl}/${this.tData.BookingID}, this.tData);
  }
}
