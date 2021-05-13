import { Component } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRoutingProject';

constructor(private data:DataService){
}

FacultyList=[
  {​​​​​"facultyId":101,"facultyName":"Vivek","facultyMobile":"9998887771","facultyEmail":"vivek@abc.com","highestQualification":"Dr","workLocation":"Mysore"}​​​​​,
  {​​​​​"facultyId":102,"facultyName":"Pridhvi","facultyMobile":"6668887772","facultyEmail":"pridhvi@abc.com","highestQualification":"Dr","workLocation":"Bangalore"}​​​​​,
  {​​​​​"facultyId":103,"facultyName":"Patrick","facultyMobile":"8889997773","facultyEmail":"patrick@abc.com","highestQualification":"ME","workLocation":"Mysore"}​​​​​,
  {​​​​​"facultyId":104,"facultyName":"Rajesh","facultyMobile":"9988987674","facultyEmail":"rajesh@abc.com","highestQualification":"ME","workLocation":"Bangalore"}​​​​​,
  {​​​​​"facultyId":105,"facultyName":"Bhargav","facultyMobile":"9898785671","facultyEmail":"bhargav@abc.com","highestQualification":"ME","workLocation":"Bangalore"}​​​​​,
  {​​​​​"facultyId":106,"facultyName":"Ajay","facultyMobile":"8978187541","facultyEmail":"ajay@abc.com","highestQualification":"ME","workLocation":"Hyderabad"}​​​​​,
  {​​​​​"facultyId":107,"facultyName":"Bharath","facultyMobile":"7876527713","facultyEmail":"bharath@abc.com","highestQualification":"ME","workLocation":"Bangalore"}​​​​​,
  {​​​​​"facultyId":108,"facultyName":"Thiruppathi","facultyMobile":"9894147084","facultyEmail":"thiruppathi@abc.com","highestQualification":"ME","workLocation":"Mysore"}​​​​​
];
CourseList = [
  {​​​​​"courseId":"S01","courseName":"Software Development LifeCycle","durationHours":48,"passScore":55,"instructorId":102}​​​​​,
{​​​​​"courseId":"E01","courseName":"Embedded C Programming","durationHours":56,"passScore":55,"instructorId":101}​​​​​,
{​​​​​"courseId":"D01","courseName":"Programming using C#","durationHours":48,"passScore":55,"instructorId":103}​​​​​,
{​​​​​"courseId":"P01","courseName":"Python Programming","durationHours":56,"passScore":55,"instructorId":104}​​​​​,
{​​​​​"courseId":"B01","courseName":"Programming using C","durationHours":48,"passScore":55,"instructorId":107}​​​​​,
{​​​​​"courseId":"B02","courseName":"Programming using C++","durationHours":48,"passScore":55,"instructorId":105}​​​​​,
{​​​​​"courseId":"J01","courseName":"Java Programming","durationHours":48,"passScore":60,"instructorId":106}​​​​​,
{​​​​​"courseId":"J02","courseName":"Advance Java Programming","durationHours":48,"passScore":55,"instructorId":108}​​​​​,
{​​​​​"courseId":"D02","courseName":"ASP.Net Programming","durationHours":56,"passScore":55,"instructorId":103}​​​​​,
{​​​​​"courseId":"J03","courseName":"Front end Technologies","durationHours":56,"passScore":55,"instructorId":106}​​​​​,
{​​​​​"courseId":"A01","courseName":"AWS Services","durationHours":56,"passScore":55,"instructorId":100}​​​​​,
{​​​​​"courseId":"A02","courseName":"Azure Services","durationHours":56,"passScore":55,"instructorId":100}​​​​​
];
ngOnInit(){
  this.data.FacultyList=this.FacultyList;
  this.data.CourseList = this.CourseList;
}
ngOnDestroy(){

}
  
}
