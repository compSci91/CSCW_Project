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
import { LoginComponent } from './login/login.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { SingleModComponent } from './single-mod/single-mod.component';
import { StoryboardComponent } from './storyboard/storyboard.component';
import { FinalreviewComponent } from './finalreview/finalreview.component';
import { UserService } from './login/user.service';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
//import {MatCardContent} from '@angular/material'
const appRoutes: Routes = [
  {
    path: 'course-list',
    component: AllCoursesComponent,
    // children: [
    //       { path : ':course_id',
    //         component: SingleCourseComponent,
    //         outlet:'CourseOutlet',
    //         children: [
    //             { //path:'single-mod',
    //               path:'id',
    //               component: SingleModComponent,
    //               outlet:'ModuleOutlet',
    //               children: [
    //                 { path: 'lesson-list',
    //                   component: LessonComponent,
    //                   outlet:'LessonOutlet'
    //                 },
    //                 { path: 'storyboard-list',
    //                   component: StoryboardComponent,
    //                   outlet:'LessonOutlet'
    //                 }
    //             ]
    //
    //           }
    //           ]}
    //     ]
  },
  {path: 'course/:course_id',
  component: SingleCourseComponent},
  { path: 'dashboard',
    component: MainpageComponent
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    CheckboxComponent,
    VideoplayerComponent,
    MainpageComponent,
    LoginComponent,
    AllCoursesComponent,
    SingleCourseComponent,
    SingleModComponent,
    StoryboardComponent,
    FinalreviewComponent,
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
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    RouterModule.forChild(
      appRoutes
    )
  ],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent],
  exports: [
    MatCheckboxModule,
    RouterModule
  ]
})
export class AppModule { }
