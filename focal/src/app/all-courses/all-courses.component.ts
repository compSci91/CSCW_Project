import { Component, OnInit } from '@angular/core';
import { SingleCourseComponent } from '../single-course/single-course.component';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})

export class AllCoursesComponent implements OnInit {

  all_courses =[];
  course_name;

  constructor() { }

  ngOnInit() {
  }

}
