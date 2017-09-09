import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

import { LessonsComponent } from './lessons/lessons.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'lessons',
    children: [
      { path: ':id',
        children: [
          {path: 'edit', component: EditLessonComponent},
          {path: '', component: LessonDetailComponent},
        ]
      },
      { path: '', component: LessonsComponent},
    ]
  },
  {
    path: 'courses',
    children: [
      {
        path: ':id',
        children: [
        // {path: 'edit', component: EditLessonComponent},
          { path: '', component: CourseDetailComponent },
          { path: 'new-lesson', component: NewLessonComponent },
        ]
      },
      {
        path: '',
        component: CoursesComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
