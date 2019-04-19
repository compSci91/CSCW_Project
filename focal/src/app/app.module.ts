import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LessonComponent } from './lesson/lesson.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { ReactiveFormsModule} from '@angular/forms';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { MainpageComponent } from './mainpage/mainpage.component';
//import {MatCardContent} from '@angular/material'
const appRoutes: Routes = [
  { path: 'lesson-list', component: LessonComponent},
  { path: 'dashboard', component: MainpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    CheckboxComponent,
    VideoplayerComponent,
    MainpageComponent,
  ],
  imports: [
    MatCardModule,
    MatRadioModule,
    FormsModule,
    BrowserModule,
    MatCheckboxModule,
    MatNativeDateModule,
    VgCoreModule,
    ReactiveFormsModule,
    VgControlsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatCheckboxModule,
  ]
})
export class AppModule { }
