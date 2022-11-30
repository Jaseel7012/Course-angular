import { Component } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  constructor(private api:ApiService){}
  readValue=()=>{
 let data={
  "courseTitle":this.courseTitle,"courseDescription":this.courseDescription,
  "courseDate":this.courseDate,"courseDuration":this.courseDuration,
  "courseVenue":this.courseVenue
 }
 console.log(data)
 this.api.addcourse(data).subscribe(
  (resp:any)=>{
    console.log(resp)
    if (resp.status=="success"){

      alert("course added succesfully")
    }else{
      alert("something went wrong")
    }
  }
 )

  }




  // viewList=()=>
  // {
  //   let data:any={"courseTitle":this.courseTitle,"courseDescription": this.courseDescription,"courseDuration":this.courseDuration,
  //   "courseDate":this.courseDate,"courseVenue":this.courseVenue}
   
  // }
}
