import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Lesson } from './../shared/model/lesson';
import { LessonsService } from './../shared/model/lessons.service';

@Component({
  selector: 'bh-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  lesson: Lesson;
  constructor(private route: ActivatedRoute,
              private lessonService: LessonsService ) {
    route.data
      .do(val => {
        console.log('route.data', val);
      })
      .subscribe( data => this.lesson = data['lesson'] );
  }

  ngOnInit() {
  }

  updateLesson(lesson) {

    this.lessonService.saveLesson(this.lesson.$key, lesson)
    .subscribe(
      () => {
        alert('Lesson created');
      },
      err => alert(`error creating lesson ${err}`)
    );
  }
}
