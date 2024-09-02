import { Injectable } from '@angular/core';
import { MemberMembership } from './member-membership.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberMembershipsService {
  mData: MemberMembership = new MemberMembership();
  mList: MemberMembership[];
  readonly mApiUrl = "https://localhost:44358/api/MemberMemberships";

  constructor(private objHttp: HttpClient) {}

  getMemberMembershipList(): Observable<MemberMembership[]> {
    return this.objHttp.get<MemberMembership[]>(this.mApiUrl);
  }

  postMemberMembership(): Observable<MemberMembership> {
    return this.objHttp.post<MemberMembership>(this.mApiUrl, this.mData);
  }

  deleteMemberMembership(id: number): Observable<void> {
    return this.objHttp.delete<void>(${this.mApiUrl}/${id});
  }

  putMemberMembership(): Observable<MemberMembership> {
    return this.objHttp.put<MemberMembership>(${this.mApiUrl}/${this.mData.MemberMembershipID}, this.mData);
  }
}
