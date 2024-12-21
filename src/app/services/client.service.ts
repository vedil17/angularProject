import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/class/interface/role';
import { environment } from '../../environments/environment.development';
import { Client } from '../model/class/client';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENTS);
  }

  getAllEmployee() : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP);
  }

  addUpdate(obj:Client) : Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + Constant.API_METHOD.ADD_UPDATE_CLIENT,obj);
  }

  deleteClientById(id:number) : Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + Constant.API_METHOD.DELETE_CLIENT + id);
  }

  addClientProjectUpdate(obj:Client) : Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + Constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECT,obj);
  }
}
