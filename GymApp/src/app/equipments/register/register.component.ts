import { Component, OnInit } from '@angular/core';

import { EquipmentService } from '../../shared/equipment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor (public objSrv:EquipmentService)
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
      this.objSrv.eData={EquipmentId:0,EquipmentName:'',Description:'',PurchaseDate:'',LastMaintenanceDate:''};
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postEquipment().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getEquipmentList();
      alert("Equipment Creation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  updateRecord(form:NgForm)
  {
    this.objSrv.putEquipment().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getEquipmentList();
      alert("Equipment Record Updation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objSrv.eData)
    if(this.objSrv.eData.EquipmentId==undefined)
    {
      this.objSrv.eData.EquipmentId=0;
    }
    if(this.objSrv.eData.EquipmentId==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }
}
