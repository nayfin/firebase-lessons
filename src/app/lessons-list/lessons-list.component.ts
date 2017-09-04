import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { LessonsService } from '../shared/model/lessons.service';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  lessons: Lesson[];

  constructor( private lessonsService: LessonsService ) { }

  ngOnInit() {
    this.lessonsService.findAllLessons().subscribe((lessons) => {
      this.lessons = lessons;
    });
  }

}
