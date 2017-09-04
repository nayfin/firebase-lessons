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

}
