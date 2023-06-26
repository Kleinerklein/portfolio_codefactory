import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { LogoanimateComponent } from './logoanimate/logoanimate.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    NavbarComponent,
    ContactComponent,
    HeroComponent,
    LogoanimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
