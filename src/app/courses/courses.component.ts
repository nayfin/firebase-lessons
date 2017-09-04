import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../shared/model/courses.service';
import { Course } from '../shared/model/course';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bh-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses$ = this.coursesService.getAllCourses();
  }

}
