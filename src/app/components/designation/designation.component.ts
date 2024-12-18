import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/class/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  masterService = inject(MasterService)
  designationList: IDesignation [] = [];
  isLoading: boolean = true;
  
  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((results: APIResponseModel) => {
      this.designationList = results.data;
      this.isLoading = false;
    }, error => {
      alert("API Error, Network down");
    })
  }

}
