import { Injectable } from '@angular/core';
import { Members } from './members.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  memData:Members = new Members();
  memList: Members[];
  readonly memApiUrl="https://localhost:44358/api/Members";
  constructor(private objHttp:HttpClient) { }
  getEquipmentList()
  {
    this.objHttp.get(this.memApiUrl).toPromise().then(res=>this.memList=res as Members[]);
  }
  postEquipment()
  {
    return this.objHttp.post(this.memApiUrl,this.memData);
  }
  deleteEquipment(id)
  {
    return this.objHttp.delete(this.memApiUrl+"/"+id);
  }
  putEquipment()
  {
    return this.objHttp.put(this.memApiUrl+"/"+this.memData.MemberId,this.memData);
  }
}
