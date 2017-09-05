import { Component, OnInit } from '@angular/core';

import { Lesson } from '../shared/model/lesson';
import { LessonsService } from '../shared/model/lessons.service';
@Component({
  selector: 'bh-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  allLessons: Lesson[];
  filteredLessons: Lesson[];

  constructor( private lessonsService: LessonsService ) { }

  ngOnInit() {
    this.lessonsService.findAllLessons()
    .subscribe((lessons) => {
      this.allLessons = this.filteredLessons = lessons;
    });
  }

  filterLessons(filterString: string) {
    this.filteredLessons = this.allLessons.filter(lesson => {
      return lesson.description.toLowerCase().includes(filterString.toLowerCase());
    });
  }

}
