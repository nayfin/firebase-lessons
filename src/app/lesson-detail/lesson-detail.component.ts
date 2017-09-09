import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Lesson } from '../shared/model/lesson';
import { LessonsService } from './../shared/model/lessons.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bh-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: Lesson;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private lessonsService: LessonsService) { }

  ngOnInit() {
    this.route.params.switchMap((params) => {
      const lessonUrl = params['id'];
      return this.lessonsService.findLessonByUrl(lessonUrl);
    }).subscribe(lesson => this.lesson = lesson);
  }

  nextLesson() {
    this.lessonsService.loadNextLesson(this.lesson.courseId, this.lesson.$key)
      .subscribe(this.navigateToLesson.bind(this));
  }

  previousLesson() {
    this.lessonsService.loadPreviousLesson(this.lesson.courseId, this.lesson.$key)
      .subscribe(this.navigateToLesson.bind(this));
  }

  navigateToLesson(lesson: Lesson) {
    this.router.navigate(['lessons', lesson.url]);
  }
}
