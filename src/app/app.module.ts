import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { RouterModule,Routes } from '@angular/router';
const myroute:Routes=[
  {
    path:'',
    'component':CourseAddComponent
  },
  {
    path:'view',
    'component':CourseViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CourseAddComponent,
    CourseViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
