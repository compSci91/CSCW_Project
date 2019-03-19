import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  message: Message ={
    id: 1,
    content: "lick peepee"
  }
  constructor() {
   }

  ngOnInit() {
  }

}
