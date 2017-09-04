import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  @Input() lessons: Lesson[];
  constructor( ) { }

  ngOnInit() {
    console.log(this.lessons);
  }

}
