import { Injectable } from '@angular/core';
import { Equipment } from './equipment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  eData:Equipment = new Equipment();
  eList: Equipment[];
  readonly eApiUrl="https://localhost:44358/api/Equipments";
  constructor(private objHttp:HttpClient) { }
  getEquipmentList()
  {
    this.objHttp.get(this.eApiUrl).toPromise().then(res=>this.eList=res as Equipment[]);
  }
  postEquipment()
  {
    return this.objHttp.post(this.eApiUrl,this.eData);
  }
  deleteEquipment(id)
  {
    return this.objHttp.delete(this.eApiUrl+"/"+id);
  }
  putEquipment()
  {
    return this.objHttp.put(this.eApiUrl+"/"+this.eData.EquipmentId,this.eData);
  }
}
