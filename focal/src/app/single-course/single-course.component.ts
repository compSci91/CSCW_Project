import { Component, OnInit } from '@angular/core';
import {Module} from '../module';
import {Course} from '../course';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})

export class SingleCourseComponent implements OnInit {

  modules =[];
  //title, mediaurl, media-type,
  //
  //create a new lessons
  //initialize all things


  constructor() { }

  ngOnInit() {
  }

}
