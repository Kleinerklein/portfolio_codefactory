import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { IEducation } from '../../data/IEducation';
import { educations } from '../../data/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit{

  educations: IEducation[] = educations;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    VanillaTilt.init(document.querySelectorAll('.educationCard') as any)
  }
}
