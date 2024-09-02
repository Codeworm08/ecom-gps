import { Component, OnInit } from '@angular/core';
import { MemberMembershipsService } from '../../shared/MemberMemberships';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-msh-register',
  templateUrl: './msh-register.component.html',
  styleUrl: './msh-register.component.css'
})
export class MshRegisterComponent implements OnInit {
  
  constructor (public objSrv:MemberMembershipsService)
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
      this.objSrv.mData={MemberMembershipId:0,MemberId:0,MembershipId:0,StartDate:'',EndDate:''};
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postMemberMembership().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getMemberMembershipList();
      alert("Member's membership created");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  updateRecord(form:NgForm)
  {
    this.objSrv.putMemberMembership().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getMemberMembershipList();
      alert("Member's Membership Updation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objSrv.mData)
    if(this.objSrv.mData.MemberMembershipId==undefined)
    {
      this.objSrv.mData.MemberMembershipId=0;
    }
    if(this.objSrv.mData.MemberMembershipId==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }
}
