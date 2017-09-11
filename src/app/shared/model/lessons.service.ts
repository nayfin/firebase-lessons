import { database } from 'firebase';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

import { Lesson } from './lesson';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LessonsService {

  sdkDb: any; // TODO: Identify sdkdb type

  constructor(
    private db: AngularFireDatabase,
    @Inject(FirebaseApp) fb) {
    this.sdkDb = fb.database().ref();
  }

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

  createNewLesson(courseId: string, lesson: Lesson): Observable<any> {

    const lessonsToSave = Object.assign( {}, lesson, {courseId} );

    const newLessonKey = this.sdkDb.child('lessons').push().key;

    let dataToSave = {};

    dataToSave[`lessons/${newLessonKey}`] = lessonsToSave;
    dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;

    return this.firebaseUpdate(dataToSave);
  }

  saveLesson(lessonId: string, lesson: Lesson): Observable<any> {
    const lessonsToSave = Object.assign( {}, lesson);
    delete(lessonsToSave.$key);

    let dataToSave = {};

    dataToSave[`lessons/${lessonId}`] = lessonsToSave;

    return this.firebaseUpdate(dataToSave);
  }

  firebaseUpdate(dataToSave) {
    const subject = new Subject();
    this.sdkDb.update(dataToSave)
      .then(
        val => {
          subject.next(val);
          subject.complete();
        },
        err => {
          subject.error(err);
          subject.complete();
        }
      );
    return subject.asObservable();
  }
}
