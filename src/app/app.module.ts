// External Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';

// Internal Modules
import { FirebaseModule } from './modules/angularFire.module';
import { DesignModule } from './modules/design.module';
import { CoreModule } from './core/core.module';
// Routing
import { AppRoutingModule } from './app-routing.module';
// App Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
// Library Components TODO: factor into library module
import { FormComponent } from './lib/forms/form/form.component';
import { InputComponent } from './lib/forms/input/input.component';
// Services
import { LessonsService } from './shared/model/lessons.service';
import { CoursesService } from './shared/model/courses.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LessonsComponent } from './lessons/lessons.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputComponent,
    CoursesComponent,
    LessonsListComponent,
    CourseDetailComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FirebaseModule,
    DesignModule,
    CoreModule,
  ],
  providers: [
    LessonsService,
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
