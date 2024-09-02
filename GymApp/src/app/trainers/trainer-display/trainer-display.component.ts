import { Component } from '@angular/core';
import { TrainersService } from '../../shared/trainers.service';

@Component({
  selector: 'app-trainer-display',
  templateUrl: './trainer-display.component.html',
  styleUrl: './trainer-display.component.css'
})
export class TrainerDisplayComponent {
  constructor (public srvE:TrainersService){}
  ngOnInit()
  {
    this.srvE.getTrainersList();
  }
  fillForm(selectedE)
  {
    this.srvE.traData=Object.assign({},selectedE);
  }
  onDelete(id)
  {
    if(confirm('Are you sure you want to delete this Trainer Record?'))
    {
      this.srvE.deleteTrainer(id).subscribe(
        res=>{
          alert("Passport Record Deleted!!");
          this.srvE.getTrainersList();
        },
        err=>{
          alert("Error!!"+err);
        }
      );
    }
  }
}
