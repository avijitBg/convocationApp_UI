import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../model/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private api: AppService) {}
  user:any;
  active:boolean = false;
  isEligible: boolean = false;
  ngOnInit(){
    this.api.getActiveFlag().subscribe((users) => {
      if(users.control?.active){
        this.active=true;
        console.log("active:: "+ this.active)
        this.api.getUser("amin.hossain@humber.ca.ZZZZ").subscribe((data) => {
          this.user = data;
          this.user = data.users?.at(0);
          this.isEligible = this.user.programs.filter((program:any) => program.eligibility).length > 0
        })
      }
    })
    
  } 
  title = 'convocation-app';
  selectedIndex = 0
  next() {
    if (this.selectedIndex != 4) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }
  prev() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }
}
