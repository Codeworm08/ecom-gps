import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MembershipsService } from '../../shared/memberships.service';

@Component({
  selector: 'app-membershipregister',
  templateUrl: './membershipregister.component.html',
  styleUrl: './membershipregister.component.css'
})
export class MembershipregisterComponent implements OnInit {
  constructor (public objSrv:MembershipsService)
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
      this.objSrv.mbData={MembershipId:0,MembershipType:'',Duration:0,Price:0};
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postMembership().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getMembershipsList();
      alert("Membership Creation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  updateRecord(form:NgForm)
  {
    this.objSrv.putMembership().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getMembershipsList();
      alert("Membership Updation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objSrv.mbData)
    if(this.objSrv.mbData.MembershipId==undefined)
    {
      this.objSrv.mbData.MembershipId=0;
    }
    if(this.objSrv.mbData.MembershipId==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }
}
