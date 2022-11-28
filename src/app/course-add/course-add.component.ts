import { Component } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';

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




  viewList=()=>
  {
    let data:any={"courseTitle":this.courseTitle,"courseDescription": this.courseDescription,"courseDuration":this.courseDuration,
    "courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
  }
}
