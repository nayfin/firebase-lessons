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
}
