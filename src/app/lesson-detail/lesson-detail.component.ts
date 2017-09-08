import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Lesson } from '../shared/model/lesson';
import { LessonsService } from './../shared/model/lessons.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bh-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lessonUrl: string;
  lesson: Lesson;
  constructor( private route: ActivatedRoute,
               private lessonsService: LessonsService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.lessonUrl = params.id;
    });
    this.lessonsService.findLessonByUrl(this.lessonUrl).subscribe(lesson => this.lesson = lesson);
  }

  nextLesson() {
    this.lessonsService.loadNextLesson(this.lesson.courseId, this.lesson.$key);
  }

  previousLesson( lesson: Lesson) {
    this.lessonsService.loadNextLesson(lesson.courseId, lesson.$key);
  }
}
