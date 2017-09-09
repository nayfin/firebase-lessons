import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      videoUrl: ['', Validators.required],
      tags: ['', Validators.required],
      longDescription: ['', Validators.required],
    });
  }

}
