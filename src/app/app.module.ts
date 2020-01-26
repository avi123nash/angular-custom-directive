import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Division1Component } from './division1/division1.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DivisionStylingDirective } from './division-styling.directive';

@NgModule({
  declarations: [
    AppComponent,
    Division1Component,
    DivisionStylingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
