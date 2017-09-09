import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateUrl } from '../shared/validators/validateUrl';

@Component({
  selector: 'bh-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  lessonForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.lessonForm = this.fb.group({
      description: ['', Validators.required],
      url: ['', Validators.required],
      videoUrl: ['', [Validators.required, validateUrl ]],
      tags: ['', Validators.required],
      longDescription: ['', Validators.required],
    });
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
