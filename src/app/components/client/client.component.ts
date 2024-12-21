import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/class/interface/role';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule,UpperCasePipe, DatePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  currentDate: Date = new Date();
  
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient(obj: Client) {
    debugger;
    this.clientService.addUpdate(obj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert('Client created success');
        this.loadClients();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    })
  }

  deleteClient(id: number) {
    const isDelete = confirm('are you sure');

    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Client delete success');
          this.loadClients();
        } else {
          alert(res.message);
        }
      })
    }

  }

  editClient(client: Client) {
    this.clientObj = client;
  }

  onReset() {
    this.clientObj = new Client();
  }
}
