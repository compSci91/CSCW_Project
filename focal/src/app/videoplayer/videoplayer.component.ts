import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {

  mediaLink = "http://static.videogular.com/assets/videos/videogular.mp4";
  mediaType ="video/mp4";
  constructor() { }

  ngOnInit() {
  }

}
