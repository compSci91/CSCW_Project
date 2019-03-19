import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { LessonComponent } from './lesson/lesson.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
   declarations: [
       AppComponent,
       LessonComponent,
       CommentComponent
   ],
   imports: [
       BrowserModule,
       VgCoreModule,
       VgControlsModule
   ],
   providers: [],
   bootstrap: [ AppComponent ]
})
export class AppModule {
}
