import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

FacultyList:any;
 constructor(private data:DataService) {

 }
 
  ngOnInit(): void {
    this.FacultyList=this.data.FacultyList;
  }

}
