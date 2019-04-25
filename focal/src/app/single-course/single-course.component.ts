import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  create_page(){

  }
}
