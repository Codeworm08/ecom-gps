import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../shared/members.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mem-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class MemRegisterComponent implements OnInit {
  constructor (public objSrv:MembersService)
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
      this.objSrv.memData={MemberId:0,FirstName:'',LastName:'',Email:'',Phone:'',DateOfBirth:'',JoinDate:'',MembershipStatus:''};
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postMember().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getMembersList();
      alert("Member Creation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  updateRecord(form:NgForm)
  {
    this.objSrv.putMember().subscribe
    (res=>{
      this.resetForm();
      this.objSrv.getMembersList();
      alert("Member Record Updation Success");
    },
    err=>{alert("Error!!!"+err);

    })
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objSrv.memData)
    if(this.objSrv.memData.MemberId==undefined)
    {
      this.objSrv.memData.MemberId=0;
    }
    if(this.objSrv.memData.MemberId==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }
}
