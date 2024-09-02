import { Component } from '@angular/core';
import { TrainerBookingsService } from '../../shared/TrainerBookings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tb-register',
  templateUrl: './tb-register.component.html',
  styleUrl: './tb-register.component.css'
})
export class TbRegisterComponent {
  constructor (public objSrv:TrainerBookingsService)
  {

  }
  ngOnInit():void{
    throw new Error('Method not implemented');
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
      form.form.reset();
    }
    else
    {
      this.objSrv.tData={BookingId:0,MemberId:0,TrainerId:0,DayOfWeek:0,StartTime:'', EndTime:''};
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postTrainerBooking().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getTrainerBookingList();
      alert("Booking Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  updateRecord(form:NgForm)
  {
    this.objSrv.putTrainerBooking().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getTrainerBookingList();
      alert("Booking Updation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objSrv.tData)
    if(this.objSrv.tData.BookingId==undefined)
    {
      this.objSrv.tData.BookingId=0;
    }
    if(this.objSrv.tData.BookingId==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }
}
