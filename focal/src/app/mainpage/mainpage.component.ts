import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  lessons = [];
  update_lesson_list(value:string){

  }

  constructor() { }

  ngOnInit() {
  }

}
