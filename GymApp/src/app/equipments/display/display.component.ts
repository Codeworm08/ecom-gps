import { Component } from '@angular/core';
import { EquipmentService } from '../../shared/equipment.service';

@Component({
  selector: 'app-equip-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  constructor (public srvE:EquipmentService){}
  ngOnInit()
  {
    this.srvE.getEquipmentList();
  }
  fillForm(selectedE)
  {
    this.srvE.eData=Object.assign({},selectedE);
  }
  onDelete(eid)
  {
    if(confirm('Are you sure you want to delete this Equipment Record?'))
    {
      this.srvE.deleteEquipment(eid).subscribe(
        res=>{
          alert("Equipment Record Deleted!!");
          this.srvE.getEquipmentList();
        },
        err=>{
          alert("Error!!"+err);
        }
      );
    }
  }
}
