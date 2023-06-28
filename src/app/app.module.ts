import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

import { LogoanimateComponent } from './logoanimate/logoanimate.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObjectComponent } from './object/object.component';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { ColorobjectComponent } from './colorobject/colorobject.component';
// import { SceneComponent } from './scene/scene.component';


@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    NavbarComponent,
    ContactComponent,
   
    LogoanimateComponent,
    HeroComponent,
    ProjectsComponent,
    DescriptionComponent,
    ColorobjectComponent,
    // ObjectComponent,
    // SceneComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ObjectComponent,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
