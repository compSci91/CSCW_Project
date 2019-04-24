import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {

  clickMessage = '';
  value = '';
  comment_section = [];
  comment_counter = 0;
  message_content = "";
  new_message;



  constructor() {

  }

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  update(value: string){
     this.value = value;
     this.message_content = value;
     this.comment_counter = this.comment_counter + 1;
     //this.new_message = new Message(this.comment_counter,this.message_content);
     this.new_message = new Message();
     this.new_message.id= this.comment_counter;
     this.new_message.content = this.message_content;
     this.comment_section.push(this.new_message);
   }

}
