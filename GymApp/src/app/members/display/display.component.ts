import { Component } from '@angular/core';
import { MembersService } from '../../shared/members.service';

@Component({
  selector: 'app-mem-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class MemDisplayComponent {
  constructor (public srvM:MembersService){}
  ngOnInit()
  {
    this.srvM.getMembersList();
  }
  fillForm(selectedM)
  {
    this.srvM.memData=Object.assign({},selectedM);
  }
  onDelete(mid)
  {
    if(confirm('Are you sure you want to delete this Member Record?'))
    {
      this.srvM.deleteMember(mid).subscribe(
        res=>{
          alert("Member Record Deleted!!");
          this.srvM.getMembersList();
        },
        err=>{
          alert("Error!!"+err);
        }
      );
    }
  }
}
