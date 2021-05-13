import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  CourseList:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.CourseList=this.data.CourseList;
  }

}
