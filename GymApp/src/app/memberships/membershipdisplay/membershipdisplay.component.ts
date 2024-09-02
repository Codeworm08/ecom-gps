import { Component } from '@angular/core';
import { MembershipsService } from '../../shared/memberships.service';

@Component({
  selector: 'app-membershipdisplay',
  templateUrl: './membershipdisplay.component.html',
  styleUrl: './membershipdisplay.component.css'
})
export class MembershipdisplayComponent {
  constructor (public srvM:MembershipsService){}
  ngOnInit()
  {
    this.srvM.getMembershipsList();
  }
  fillForm(selectedM)
  {
    this.srvM.mbData=Object.assign({},selectedM);
  }
  onDelete(mid)
  {
    if(confirm('Are you sure you want to delete this Membership?'))
    {
      this.srvM.deleteMembership(mid).subscribe(
        res=>{
          alert("Membership Deleted!!");
          this.srvM.getMembershipsList();
        },
        err=>{
          alert("Error!!"+err);
        }
      );
    }
  }
}
