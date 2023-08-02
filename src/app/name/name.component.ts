import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConvocationService } from '../ConvocationService';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit{
  @Input() name: string = ""

  studentName: any;

  constructor(private convocationService: ConvocationService) {}
  ngOnInit(): void {
    this.getStudentName();
  }

  getStudentName() {
    this.convocationService.getStudentName().subscribe(
      (response) => {
        this.studentName = response.name;
      },
      (error) => {
        console.log('Error fetching student name:', error);
      }
    );
  }

}
