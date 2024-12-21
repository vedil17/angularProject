import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/class/interface/role';
import { Client } from '../../model/class/client';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{

  clientService = inject(ClientService)

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),

  })

  employeeList : Employee[] = [];
  clientList : Client[] = [];

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllClients();
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res:APIResponseModel) => {
      this.employeeList = res.data
    })
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data
    })
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientService.addClientProjectUpdate(formValue).subscribe((res:APIResponseModel) => {
      if(res.result){
        alert('project added successfully');
      }else {
        alert(res.message)
      }
    })
  }
}
