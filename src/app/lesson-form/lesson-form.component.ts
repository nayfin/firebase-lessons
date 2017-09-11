import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateUrl } from '../shared/validators/validateUrl';

import { Lesson } from './../shared/model/lesson';

@Component({
  selector: 'bh-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit, OnChanges {

  @Input() initialValue: Lesson;
  lessonForm: FormGroup;
  constructor(private fb: FormBuilder) { 

    this.lessonForm = this.fb.group({
      description: ['', Validators.required],
      url: ['', Validators.required],
      videoUrl: ['', [Validators.required, validateUrl ]],
      tags: ['', Validators.required],
      longDescription: ['', Validators.required],
    });

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

    if ( this.lessonForm && changes['initialValue']) {
      this.lessonForm.patchValue(changes['initialValue'].currentValue);
    }
  }

  reset() {
    this.lessonForm.reset();
  }

  get invalid() {
    return this.lessonForm.invalid;
  }

  get value() {
    return this.lessonForm.value;
  }
}
