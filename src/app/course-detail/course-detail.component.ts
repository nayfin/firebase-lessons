import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from './../shared/model/courses.service';
import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bh-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseLessons: Lesson[];
  course$: Observable<Course>;
  courseUrl: string;

  constructor( private coursesService: CoursesService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.courseUrl = params['id'];

      this.course$ = this.coursesService.findCourseByUrl(this.courseUrl);

      const courseLessons$ = this.coursesService.loadFirstLessonsPage(this.courseUrl, 3);
      // this.courseLessons$ = this.coursesService.findLessonsForCourse(courseUrl);
      courseLessons$.subscribe(lessons => this.courseLessons = lessons);
    });
  }

  previousLessons() {
    this.coursesService.loadPreviousPage(
      this.courseUrl,
      this.courseLessons[0].$key,
      3
    ).subscribe(lessons => this.courseLessons = lessons);
  }

  nextLessons() {
    this.coursesService.loadNextPage(
      this.courseUrl,
      this.courseLessons[this.courseLessons.length - 1].$key,
      3
    ).subscribe(lessons => this.courseLessons = lessons);
  }

  navigateToLesson(lesson: Lesson) {
    this.router.navigate(['lessons', lesson.url]);
  }
}
