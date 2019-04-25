import { Component, OnInit } from '@angular/core';
import { SingleCourseComponent } from '../single-course/single-course.component';
import { Course } from '../course';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})

export class AllCoursesComponent implements OnInit {

  all_courses = [];
  new_course;
  temp_course_id =0;
  constructor() { }

  ngOnInit() {
  }

  update(value: string){
      this.new_course = new Course();
      this.new_course.name = value;
      this.new_course.course_id = this.temp_course_id;
      this.temp_course_id++;
      this.all_courses.push(this.new_course);
   }

}
