import { Component, OnInit } from '@angular/core';
import {Module} from '../module';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  modules = [];



  update = function(){
    let cscw = new Module();
    cscw.name = "Computer Supported Cooperative Work";
    cscw.storyboard_completed = true;
    cscw.filming_complete = true;
    cscw.audio_complete = true;
    cscw.production_complete = false;
    cscw.aggregation_complete = false;
    cscw.final_review_complete = false;

    let embodiment = new Module();
    embodiment.name = "Embodiment and Interaction";
    embodiment.storyboard_completed = true;
    embodiment.filming_complete = true;
    embodiment.audio_complete = false;
    embodiment.production_complete = false;
    embodiment.aggregation_complete = false;
    embodiment.final_review_complete = false;


   this.modules.push(cscw);
   this.modules.push(embodiment);
   }

  constructor() {


  }

  ngOnInit() {
      this.update()
  }



}
