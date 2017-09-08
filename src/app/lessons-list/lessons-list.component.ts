import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  @Input() lessons: Lesson[];
  @Output() lessonEmitted = new EventEmitter<Lesson>();

  constructor( ) { }

  ngOnInit() {
  }

  selectLesson(lesson: Lesson) {
    this.lessonEmitted.emit(lesson);
  }
}
