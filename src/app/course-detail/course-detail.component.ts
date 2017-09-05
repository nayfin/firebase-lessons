import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from './../shared/model/courses.service';
import { Lesson } from './../shared/model/lesson';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bh-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseLessons: Lesson[];
  constructor( private coursesService: CoursesService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    let courseUrl: string;
    this.route.params.subscribe(params => {
      courseUrl = params['id'];
      this.coursesService.findLessonsForCourse(courseUrl)
        .subscribe((lessons) => {
          this.courseLessons = lessons;
        });
    });
  }

}
