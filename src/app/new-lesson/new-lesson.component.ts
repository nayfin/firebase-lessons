import { LessonsService } from './../shared/model/lessons.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bh-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css']
})
export class NewLessonComponent implements OnInit {

  courseId: string;

  constructor( private route: ActivatedRoute,
               private lessonService: LessonsService) { }

  ngOnInit() {
    this.courseId = this.route.snapshot.queryParams['courseId'];
  }

}
