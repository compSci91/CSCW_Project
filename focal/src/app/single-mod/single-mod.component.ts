import { Component, OnInit } from '@angular/core';
import { LessonComponent } from '../lesson/lesson.component';
@Component({
  selector: 'app-single-mod',
  templateUrl: './single-mod.component.html',
  styleUrls: ['./single-mod.component.css']
})
export class SingleModComponent implements OnInit {

  links: Array<{ text: string, path: string }> = [];
  constructor() { }

  ngOnInit() {
  }

}
