import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-course-available',
  templateUrl: './course-available.component.html',
  styleUrls: ['./course-available.component.css']
})
export class CourseAvailableComponent implements OnInit {

  CourseList:any;
  FacultyList:any;
  CourseAvailable:any;
  courseAvailableLength:any;
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.CourseList=this.data.CourseList;
    this.FacultyList= this.data.FacultyList;


    this.CourseAvailable  = this.FacultyList.filter((array_el: { facultyId: any; }) =>{
      return this.CourseList.filter(function(anotherOne_el: { instructorId: any; }){
         return anotherOne_el.instructorId === array_el.facultyId;
      }).length != 0});

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
