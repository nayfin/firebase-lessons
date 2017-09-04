import { DesignModule } from './../modules/design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// Will be moved to routed location and out of CoreModule
import { LessonsListComponent } from './../lessons-list/lessons-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LessonsListComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    DesignModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [

  ]
})
export class CoreModule { }
