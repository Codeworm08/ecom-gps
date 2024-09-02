import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Membermembership } from './membermembership.model';

@Injectable({
  providedIn: 'root'
})
export class MemberMembershipsService {
  mData: Membermembership = new Membermembership();
  mList: Membermembership[];
  readonly mApiUrl = "https://localhost:44358/api/MemberMemberships";
  
  constructor(private objHttp: HttpClient) {}



  getMemberMembershipList(){
    this.objHttp.get(this.mApiUrl).toPromise().then(res=>this.mList=res as Membermembership[]);
  }

  postMemberMembership(){
    return this.objHttp.post(this.mApiUrl, this.mData);
  }

  deleteMemberMembership(id: number){
    return this.objHttp.delete(this.mApiUrl+id);
  }

  putMemberMembership(){
    return this.objHttp.put(this.mApiUrl+"/"+this.mData.MemberMembershipId, this.mData);
  }
}
