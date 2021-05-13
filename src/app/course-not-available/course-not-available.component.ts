import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-course-not-available',
  templateUrl: './course-not-available.component.html',
  styleUrls: ['./course-not-available.component.css']
})
export class CourseNotAvailableComponent implements OnInit {

  CourseList:any;
  FacultyList:any;
  CourseAvailable:any;
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.CourseList=this.data.CourseList;
    this.FacultyList= this.data.FacultyList;

      let merged = [];

    for(let i=0; i<this.CourseList.length; i++) {
      merged.push({
      ...this.CourseList[i], 
      ...(this.FacultyList.find((itmInner: { facultyId: number; }) => itmInner.facultyId === this.CourseList[i].instructorId))}
      );
    }
    this.CourseAvailable=merged;

  }

}
