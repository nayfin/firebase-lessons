// External Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
// rsJs imports
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CoursesService } from './shared/model/courses.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
// Library Components TODO: factor into library module
import { FormComponent } from './lib/forms/form/form.component';
import { InputComponent } from './lib/forms/input/input.component';
// Services
import { AuthService } from './shared/security/auth.service';
import { LessonsService } from './shared/model/lessons.service';
// Pipes
import { SafeUrlPipe } from './shared/security/safe-url.pipe';
// Resolvers
import { LessonResolver } from './shared/model/lesson.resolver';
// Guards
import { AuthGuard } from './shared/security/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputComponent,
    CoursesComponent,
    LessonsListComponent,
    CourseDetailComponent,
    LessonsComponent,
    LessonDetailComponent,
    SafeUrlPipe,
    NewLessonComponent,
    LessonFormComponent,
    EditLessonComponent,
    LoginComponent,
    RegisterComponent,
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
    AuthService,
    LessonResolver,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
