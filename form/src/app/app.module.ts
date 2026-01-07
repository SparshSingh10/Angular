import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ɵInternalFormsSharedModule, ReactiveFormsModule } from "@angular/forms";
import { ValidationFormComponent } from './validation-form/validation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    
  ],
  imports: [
    BrowserModule,
    TestComponent,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    ValidationFormComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
