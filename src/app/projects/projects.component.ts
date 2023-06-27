import { Component } from '@angular/core';
import { IProject } from 'src/data/IProjects';
import { projects } from 'src/data/projects';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: IProject[] = projects

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    VanillaTilt.init(document.querySelectorAll('.projectCard') as any)
  }
}
