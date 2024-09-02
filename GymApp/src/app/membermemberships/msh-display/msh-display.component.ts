import { Component } from '@angular/core';
import { MemberMembershipsService } from '../../shared/MemberMemberships';

@Component({
  selector: 'app-msh-display',
  templateUrl: './msh-display.component.html',
  styleUrl: './msh-display.component.css'
})
export class MshDisplayComponent {
  constructor (public srvM:MemberMembershipsService){}
  ngOnInit()
  {
    this.srvM.getMemberMembershipList();
  }
  fillForm(selectedM)
  {
    this.srvM.mData=Object.assign({},selectedM);
  }
  onDelete(mid)
  {
    if(confirm('Are you sure you want to delete the member\'s Membership?'))
    {
      this.srvM.deleteMemberMembership(mid).subscribe(
        res=>{
          alert("Member Membership Deleted!!");
          this.srvM.getMemberMembershipList();
        },
        err=>{
          alert("Error!!"+err);
        }
      );
    }
  }
}
