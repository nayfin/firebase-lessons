import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CoursesComponent } from './courses/courses.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'lessons', component: LessonsListComponent},
  { path: 'courses', component: CoursesComponent},
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
