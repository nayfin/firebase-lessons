import { DesignModule } from './../modules/design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
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
