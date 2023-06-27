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
    const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {

        const animated = entry.target.querySelector('.education') as any;

        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          animated.classList.add('animate__fadeInLeft');
          return;
        }
        animated.classList.remove('animate__fadeInLeft')

      });
    });
    
    observer.observe(document.querySelector('.fader') as any);

    VanillaTilt.init(document.querySelectorAll('.educationCard') as any)
  }
}
