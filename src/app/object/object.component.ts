import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { NgtCanvas } from 'angular-three';
import { Scene } from '../scene/scene.component';
import { ITech } from 'src/data/ITech';
import { techs } from 'src/data/techs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-object',
  standalone: true,
  template: `
  
  <div *ngFor="let tech of techs">
    <div style="width: 100%; height: 50vh; border-style: solid;">
      <ngt-canvas [sceneGraph]="Scene" [tech]="tech" /> 
    </div>
  </div>`,
  imports: [NgtCanvas, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ObjectComponent {

  techs:ITech[] = techs;
  // showConsole(){
  //   console.log(this.techs)
  // }
  readonly Scene = Scene;
}