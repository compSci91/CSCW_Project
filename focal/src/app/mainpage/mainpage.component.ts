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

  update = function(){
    let cscw = new Course()
    cscw.name = "Computer Supported Cooperative Work"
    cscw.modules = []

    let lesson1 = new Module();
    lesson1.name = "Cooperation";
    lesson1.storyboard_completed = true;
    lesson1.filming_complete = true;
    lesson1.audio_complete = true;
    lesson1.production_complete = false;
    lesson1.aggregation_complete = false;
    lesson1.final_review_complete = false;

    let lesson2 = new Module();
    lesson2.name = "Coordination";
    lesson2.storyboard_completed = true;
    lesson2.filming_complete = true;
    lesson2.audio_complete = false;
    lesson2.production_complete = false;
    lesson2.aggregation_complete = false;
    lesson2.final_review_complete = false;

      cscw.modules = [lesson1, lesson2]

    // cscw.modules.push(lesson1);
    // cscw.modules.push(lesson2);

    this.courses.push(cscw)

    let embodiment = new Course()
    embodiment.name = "Embodied Interaction"
    embodiment.modules = []

    let course1_lesson1 = new Module();
    course1_lesson1.name = "Embodied";
    course1_lesson1.storyboard_completed = true;
    course1_lesson1.filming_complete = false;
    course1_lesson1.audio_complete = false;
    course1_lesson1.production_complete = false;
    course1_lesson1.aggregation_complete = false;
    course1_lesson1.final_review_complete = false;

    let course2_lesson2 = new Module();
    course2_lesson2.name = "Interaction";
    course2_lesson2.storyboard_completed = true;
    course2_lesson2.filming_complete = true;
    course2_lesson2.audio_complete = false;
    course2_lesson2.production_complete = false;
    course2_lesson2.aggregation_complete = true;
    course2_lesson2.final_review_complete = true;

    embodiment.modules.push(course1_lesson1);
    embodiment.modules.push(course2_lesson2);

    this.courses.push(embodiment);





   }

  constructor() {


  }

  ngOnInit() {
      this.update()
  }



}
