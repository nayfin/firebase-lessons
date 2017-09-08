import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListFactoryOpts} from 'angularfire2/interfaces';

import { Course } from './course';
import { Lesson } from './lesson';

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  getAllCourses(): Observable<Course[]> {
    return this.db.list('courses').map(Course.fromJsonList);
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    }).map(results => results[0]);
  }

  findLessonsForLessonKeys(lessonKeys$: Observable<string[]>): Observable<Lesson[]> {
    return lessonKeys$
      .map(lspc => lspc.map(lessonKey => this.db.object(`lessons/${lessonKey}`)))
      .flatMap(fbojs => Observable.combineLatest(fbojs))
      .do((val) => console.log('findLessonsForLessonKeys:', val));
  }

  findLessonKeysByCourseUrl(courseUrl: string, query: FirebaseListFactoryOpts = {}): Observable<string[]> {
    // TODO: Understand what the hell is going on here
    return this.findCourseByUrl(courseUrl)
      .switchMap(course => this.db.list(`lessonsPerCourse/${course.$key}`, query))
      .map( lspc => lspc.map(lpc => lpc.$key));
  }

  findLessonsForCourse(courseUrl: string): Observable<Lesson[]> {
    // TODO: and here
    return this.findLessonsForLessonKeys(this.findLessonKeysByCourseUrl(courseUrl));
  }

  loadFirstLessonsPage(courseUrl: string, pagesize: number): Observable<Lesson[]> {
    const query = {query: { limitToFirst: pagesize }};
    const firsPageLessonKeys$ = this.findLessonKeysByCourseUrl( courseUrl, query);

    return this.findLessonsForLessonKeys(firsPageLessonKeys$);
  }

  loadNextPage(courseUrl: string,
               lastKey: string,
               pagesize: number): Observable<Lesson[]> {

    const query = {
      query: {
        orderByKey: true,
        startAt: lastKey,
        limitToFirst: pagesize + 1
      }
    };
    const lessonKeys$ = this.findLessonKeysByCourseUrl(courseUrl, query);

    return this.findLessonsForLessonKeys(lessonKeys$)
      .map( lessons => lessons.slice(1, lessons.length));
  }

  loadPreviousPage(courseUrl: string,
                   firstKey: string,
                   pagesize: number): Observable<Lesson[]> {

    const query = {
      query: {
        orderByKey: true,
        endAt: firstKey,
        limitToLast: pagesize + 1
      }
    };
    const lessonKeys$ = this.findLessonKeysByCourseUrl(courseUrl, query);

    return this.findLessonsForLessonKeys(lessonKeys$)
      .map( lessons => lessons.slice(0, lessons.length - 1));
  }
}
