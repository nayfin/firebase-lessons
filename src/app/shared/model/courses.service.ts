import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { Course } from './course';

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

  findLessonKeysByCourseUrl(courseUrl: string): Observable<string[]> {
    // TODO: Understand what the hell is going on here
    return this.findCourseByUrl(courseUrl)
      .switchMap(course => this.db.list(`lessonsPerCourse/${course.$key}`))
      .map( lspc => lspc.map(lpc => lpc.$key))
      .do((val) => console.log('lessonsPerCourse .do', val));
  }
  findLessonsForCourse(courseUrl: string) {
    // TODO: and here
    return this.findLessonKeysByCourseUrl(courseUrl)
      .map(lspc => lspc.map(lessonKey => this.db.object(`lessons/${lessonKey}`)))
      .flatMap(fbojs => Observable.combineLatest(fbojs))
      .do((val) => console.log('courseLessons .do', val));
  }
}
