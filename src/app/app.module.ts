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
// Internal Modules
import { FirebaseModule } from './modules/angularFire.module';
import { DesignModule } from './modules/design.module';
import { CoreModule } from './core/core.module';
// Routing
import { AppRoutingModule } from './app-routing.module';
// App Components
import { AppComponent } from './app.component';
import { FormComponent } from './lib/forms/form/form.component';
import { InputComponent } from './lib/forms/input/input.component';
// Services
import { LessonsService } from './shared/model/lessons.service';
// import { LessonsListComponent } from './lessons-list/lessons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputComponent,
    // LessonsListComponent
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
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
