import { Component } from '@angular/core';
import { TrainerBookingsService } from '../../shared/TrainerBookings';

@Component({
  selector: 'app-tb-display',
  templateUrl: './tb-display.component.html',
  styleUrl: './tb-display.component.css'
})
export class TbDisplayComponent {
  constructor (public srvM:TrainerBookingsService){}
  ngOnInit()
  {
    this.srvM.getTrainerBookingList();
  }
  fillForm(selectedM)
  {
    this.srvM.tData=Object.assign({},selectedM);
  }
  onDelete(mid)
  {
    if(confirm('Are you sure you want to delete this Booking?'))
    {
      this.srvM.deleteTrainerBooking(mid).subscribe(
        res=>{
          alert("Booking Deleted!!");
          this.srvM.getTrainerBookingList();
        },
        err=>{
          alert("Error!!"+err);
        }
      );
    }
  }
}
