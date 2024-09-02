import { Injectable } from '@angular/core';
import { Memberships } from './memberships.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {

  mbData:Memberships = new Memberships();
  memList: Memberships[];
  readonly memApiUrl="https://localhost:44358/api/Memberships";
  constructor(private objHttp:HttpClient) { }
  getMembershipsList()
  {
    this.objHttp.get(this.memApiUrl).toPromise().then(res=>this.memList=res as Memberships[]);
  }
  postMembership()
  {
    return this.objHttp.post(this.memApiUrl,this.mbData);
  }
  deleteMembership(id)
  {
    return this.objHttp.delete(this.memApiUrl+"/"+id);
  }
  putMembership()
  {
    return this.objHttp.put(this.memApiUrl+"/"+this.mbData.MembershipId,this.mbData);
  }
}
