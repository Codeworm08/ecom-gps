import { Injectable } from '@angular/core';
import { Trainers } from './trainers.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  traData:Trainers = new Trainers();
  traList: Trainers[];
  readonly traApiUrl="https://localhost:44358/api/Trainers";
  constructor(private objHttp:HttpClient) { }
  getTrainersList()
  {
    this.objHttp.get(this.traApiUrl).toPromise().then(res=>this.traList=res as Trainers[]);
  }
  postTrainer()
  {
    return this.objHttp.post(this.traApiUrl,this.traData);
  }
  deleteTrainer(id)
  {
    return this.objHttp.delete(this.traApiUrl+"/"+id);
  }
  putTrainer()
  {
    return this.objHttp.put(this.traApiUrl+"/"+this.traData.TrainerId,this.traData);
  }
}
