import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstname: string = "Angular tutorial";
  angularVersion = "Version 19";
  version : number = 19;
  isActive : boolean = false;
  currentDate : Date = new Date();
  inputType: string = "radio";
  selectedState : string = '';

  showAlertMessage() {
    alert("Welcome to Angular 19");
  }

  showMessage(message: string) {
    alert(message);
  }
}
