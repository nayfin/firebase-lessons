import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LessonsService } from './lessons.service';
import { Lesson } from './lesson';

@Injectable()
export class LessonResolver implements Resolve<Lesson> {

  constructor(private lessonsService: LessonsService) {

  }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Lesson> {

    return this.lessonsService.findLessonByUrl(route.params['id']).first();
  }
}
