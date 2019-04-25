import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Module} from '../module';
import {Course} from '../course';

export interface ModuleMetaData{
  module_name:string;
  module_number:number;
  module_storyboard_url: string;
  module_video_url: string;
}

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})


export class SingleCourseComponent implements OnInit {

  course_modules =[];
  course_id:any;


  constructor(
  private route: ActivatedRoute,
  private router: Router) {}

  ngOnInit() {
    //  this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //    this.course_id = params.get('course_id')
    // ));

    this.route.params.subscribe(params => {
       this.course_id = +params['course_id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });



    console.log("This course id is: ", this.course_id)
  }

  create_page(){

  }
}
