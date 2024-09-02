import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainersService } from '../../shared/trainers.service';

@Component({
  selector: 'app-trainer-register',
  templateUrl: './trainer-register.component.html',
  styleUrl: './trainer-register.component.css'
})
export class TrainerRegisterComponent {
  constructor (public objSrv:TrainersService)
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
      this.objSrv.traData={TrainerId:0,FirstName:'',LastName:'',Phone:'',Email:'',Specialization:''};
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postTrainer().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getTrainersList();
      alert("Trainer Creation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  updateRecord(form:NgForm)
  {
    this.objSrv.putTrainer().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getTrainersList();
      alert("Trainer Record Updation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objSrv.traData)
    if(this.objSrv.traData.TrainerId==undefined)
    {
      this.objSrv.traData.TrainerId=0;
    }
    if(this.objSrv.traData.TrainerId==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }
}
