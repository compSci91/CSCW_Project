import { Component, OnInit } from '@angular/core';
import {Module} from '../module';
import {Course} from '../course'
import { UserService } from '../login/user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  private httpOptions: any;

  courses = []

  update = function(){
    // let cscw = new Course()
    // cscw.name = "Computer Supported Cooperative Work"
    // cscw.modules = []
    //
    // let lesson1 = new Module();
    // lesson1.name = "Course 1: Lesson 1";
    // lesson1.storyboard_completed = true;
    // lesson1.filming_complete = true;
    // lesson1.audio_complete = true;
    // lesson1.production_complete = false;
    // lesson1.aggregation_complete = false;
    // lesson1.final_review_complete = false;
    //
    // let lesson2 = new Module();
    // lesson2.name = "Course 2: Lesson 2";
    // lesson2.storyboard_completed = true;
    // lesson2.filming_complete = true;
    // lesson2.audio_complete = false;
    // lesson2.production_complete = false;
    // lesson2.aggregation_complete = false;
    // lesson2.final_review_complete = false;
    //
    //   cscw.modules = [lesson1, lesson2]

    // cscw.modules.push(lesson1);
    // cscw.modules.push(lesson2);

    var json_course_1 = '{"name": "Computer Supported Cooperative Work", "modules": [{"name": "Course 1: Lesson 1", "storyboard_completed": true, "filming_complete": true, "audio_complete": true, "production_complete": false, "aggregation_complete": false, "final_review_complete": false}, {"name": "Course 1: Lesson 2", "storyboard_completed": true, "filming_complete": true, "audio_complete": false, "production_complete": false, "aggregation_complete": false, "final_review_complete": false}]}'

    let cscw = JSON.parse(json_course_1)
    this.courses.push(cscw)

    //this.courses.push(cscw)

    // let embodiment = new Course()
    // embodiment.name = "Embodied Interaction"
    // embodiment.modules = []

    // let course1_lesson1 = new Module();
    // course1_lesson1.name = "Course 2: Lesson 1";
    // course1_lesson1.storyboard_completed = true;
    // course1_lesson1.filming_complete = false;
    // course1_lesson1.audio_complete = false;
    // course1_lesson1.production_complete = false;
    // course1_lesson1.aggregation_complete = false;
    // course1_lesson1.final_review_complete = false;

    // let course2_lesson2 = new Module();
    // course2_lesson2.name = "Course 2: Lesson 2";
    // course2_lesson2.storyboard_completed = true;
    // course2_lesson2.filming_complete = true;
    // course2_lesson2.audio_complete = false;
    // course2_lesson2.production_complete = false;
    // course2_lesson2.aggregation_complete = true;
    // course2_lesson2.final_review_complete = true;


    var json_course_2 = '{"name": "Embodied Interaction", "modules": [{"name": "Course 2: Lesson 1", "storyboard_completed": true, "filming_complete": false, "audio_complete": false, "production_complete": false, "aggregation_complete": false, "final_review_complete": false}, {"name": "Course 2: Lesson 2", "storyboard_completed": true, "filming_complete": true, "audio_complete": false, "production_complete": false, "aggregation_complete": true, "final_review_complete": true}]}'


    // console.log("**************************", course2_lesson2.name)

    // embodiment.modules.push(course1_lesson1);
    // embodiment.modules.push(course2_lesson2);


    let course_list_json = '[{"name": "Computer Supported Cooperative Work", "modules": [{"name": "Course 1: Lesson 1", "storyboard_completed": true, "filming_complete": true, "audio_complete": true, "production_complete": false, "aggregation_complete": false, "final_review_complete": false}, {"name": "Course 1: Lesson 2", "storyboard_completed": true, "filming_complete": true, "audio_complete": false, "production_complete": false, "aggregation_complete": false, "final_review_complete": false}]}, {"name": "Embodied Interaction", "modules": [{"name": "Course 2: Lesson 1", "storyboard_completed": true, "filming_complete": false, "audio_complete": false, "production_complete": false, "aggregation_complete": false, "final_review_complete": false}, {"name": "Course 2: Lesson 2", "storyboard_completed": true, "filming_complete": true, "audio_complete": false, "production_complete": false, "aggregation_complete": true, "final_review_complete": true}]}]'
    // let embodiment = JSON.parse(json_course_2)

    this.courses = JSON.parse(course_list_json)

    // console.log("Fron the mainpage component: ", userService.getDashboard())

    // this.courses.push(embodiment);


    this.http.get('http://127.0.0.1:8000/api/courses').subscribe(
    data => {
      // console.log('got dashboard data success', data[0]);
      console.log("Data returned: ", data)
      // this.courses = JSON.parse(data)
      this.courses = data

    },
    err => {
      console.error('did not get dashboad data', err);

    }
  );





   }

  constructor(private userService: UserService, private http: HttpClient, private router:Router) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

  }

  ngOnInit() {
      this.update()

    // var json_module = '{name: "Course 2: Lesson 2",storyboard_completed: true,filming_complete: true,audio_complete: false,production_complete: false, aggregation_complete: true, final_review_complete: true}'
    //
    //
    // var obj = JSON.parse(json_module)

    // var json_module = '{"rollno":101, "name":"Mayank", "age":20}'

    // var json_module = '{"name": "Course 2: Lesson 2", "storyboard_completed": true, "filming_complete": true, "audio_complete": false, "production_complete": false, "aggregation_complete": true, "final_review_complete": true}'
    //
    //
    // var object1 = JSON.parse(json_module);
    //
    //
    // console.log("**************************", object1.name)



  }



}
