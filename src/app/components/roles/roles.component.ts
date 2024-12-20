import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  rolesList: IRole [] = [];
  http = inject(HttpClient);

ngOnInit(): void {
  this.getAllRoles()
}

getAllRoles() {
  this.http.get<APIResponseModel>(environment.API_URL + "GetAllRoles").subscribe((res:APIResponseModel) => {
    this.rolesList = res.data;
  })
}
}
