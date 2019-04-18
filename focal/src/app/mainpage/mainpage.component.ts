import { Component, OnInit } from '@angular/core';
import {Module} from '../module';
import {Course} from '../course'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  courses = []
  // modules = [];



  update = function(){
    let cscw = new Course()
    cscw.name = "Computer Supported Cooperative Work"
    cscw.modules = []

    let lesson1 = new Module();
    lesson1.name = "Lesson 1";
    lesson1.storyboard_completed = true;
    lesson1.filming_complete = true;
    lesson1.audio_complete = true;
    lesson1.production_complete = false;
    lesson1.aggregation_complete = false;
    lesson1.final_review_complete = false;

    let lesson2 = new Module();
    lesson2.name = "Lesson 2";
    lesson2.storyboard_completed = true;
    lesson2.filming_complete = true;
    lesson2.audio_complete = false;
    lesson2.production_complete = false;
    lesson2.aggregation_complete = false;
    lesson2.final_review_complete = false;

    cscw.modules.push(lesson1);
    cscw.modules.push(lesson2);

    this.courses.push(cscw)
   }

  constructor() {


  }

  ngOnInit() {
      this.update()
  }



}
