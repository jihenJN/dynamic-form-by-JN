import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { GuiGeneratorComponent } from './gui-generator/gui-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    GuiGeneratorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
