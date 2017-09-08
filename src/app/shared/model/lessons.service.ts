import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Lesson } from './lesson';

@Injectable()
export class LessonsService {

  constructor(private db: AngularFireDatabase) { }

  findAllLessons(): Observable<Lesson[]> {
    return this.db.list('lessons')
      .do(console.log)
      .map(Lesson.fromJsonList);
  }
  findLessonByUrl(lessonUrl: string): Observable<Lesson> {
    const query = {
      query: {
        orderByChild: 'url',
        equalTo: lessonUrl
      }
    };
    return this.db.list('lessons', query).map(lessons => Lesson.fromJson(lessons[0]));
  }

  loadNextLesson(lessonId, courseId) {
    const query = {
      query: {
        orderByChild: 'key',
        equalTo: lessonId
      }
    };
    this.db.object(`lessonsPerCourse/${courseId}`, query)
    return Observable.of([]);
  }

  loadPreviousLesson(lessonId, courseId) {
    return Observable.of([]);
  }
}
