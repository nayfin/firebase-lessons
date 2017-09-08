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
    console.log(lessonUrl);
    return this.db.list('lessons', query).map(lessons => Lesson.fromJson(lessons[0]));
  }

  findLessonByKey(lessonKey: string): Observable<Lesson> {
    return this.db.object(`lessons/${lessonKey}`).map(Lesson.fromJson);
  }

  loadNextLesson(courseId, lessonId ) {
    const query = {
      query: {
        orderByKey: true,
        startAt: lessonId,
        limitToFirst: 2
      }
    };
    return this.db.list(`lessonsPerCourse/${courseId}`, query)
      .do(console.log)
      .map(results => {
        console.log(results[1]);
        return results[1].$key;
      })
      .switchMap(lessonKey => this.findLessonByKey(lessonKey));
  }

  loadPreviousLesson( courseId, lessonId ) {
    const query = {
      query: {
        orderByKey: true,
        endAt: lessonId,
        limitToLast: 2
      }
    };
    return this.db.list(`lessonsPerCourse/${courseId}`, query)
      .map(results => results[0].$key)
      .switchMap(lessonKey => this.findLessonByKey(lessonKey));
  }
}
