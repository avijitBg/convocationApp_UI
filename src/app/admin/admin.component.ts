import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  convocationTermList: Array<string> = ["201950", "201930"]
  degreeStatusList: Array<string> = ["AW", "IP", "CR", "PR", "FN"]


}
