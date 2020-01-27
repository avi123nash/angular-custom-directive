import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Division1Component } from './division1/division1.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DivisionStylingDirective } from './division-styling.directive';
import { DivisionTest2Component } from './division-test2/division-test2.component';
import { Division2TestService } from './division2-test.service';

@NgModule({
  declarations: [
    AppComponent,
    Division1Component,
    DivisionStylingDirective,
    DivisionTest2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Division2TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
