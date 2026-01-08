import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Angular starts the app → loads AppModule

// So the FIRST file you should understand is:

// 🟢 1️⃣ AppModule (ROOT of everything)
// What your brain should think:

// “This is the root container of my app.”

// Key ideas (very important):

// Thing	Meaning
// declarations	Components that belong to this module
// imports	Features this module needs
// bootstrap	FIRST component Angular shows

// 👉 Angular always shows AppComponent first

// Nothing else matters before this