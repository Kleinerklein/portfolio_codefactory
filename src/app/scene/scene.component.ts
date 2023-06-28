import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA,inject ,Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgtCanvas, extend, NgtBeforeRenderEvent, NgtStore, NgtArgs, NgtTexture } from 'angular-three';
import { ITech } from 'src/data/ITech';
import { techs } from 'src/data/techs';
import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  PointLight,
} from 'three';
import * as THREE from 'three'
import { OrbitControls, DecalGeometry,   } from 'three-stdlib';

// extend({ Mesh, MeshStandardMaterial, BoxGeometry, AmbientLight, PointLight });
extend(THREE)
extend({ OrbitControls });

@Component({
  selector: 'demo-cube',
  standalone: true,
  template: `
    <ngt-mesh

      [position]="position"
      (beforeRender)="onBeforeRender($any($event).object)"
    >
      <ngt-sphere-geometry 
        *args="[2,12,7]"
      />

      <ngt-mesh-standard-material 
        [color]="'#fff8eb'" 
        [polygonOffset]="true" 
        [polygonOffsetFactor]="-5" 
        [flatShading]="true" 
        [map] = "texture"
      />

    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports:[NgtArgs]
})
export class Sphere {
  
  // get the texture 
  @Input() icon = techs[0].icon;
  @Input() position = [0,0,0]
  texture = new THREE.TextureLoader().load(this.icon)
  onBeforeRender(cube: Mesh) {
    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
}

@Component({
  standalone: true,
  templateUrl: `./scene.component.html`,
  imports: [Sphere,NgtArgs, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Scene {
  techs: ITech[] = techs;

  @Input() tech: ITech = techs[1];
  
  
  private readonly store = inject(NgtStore);
    readonly camera = this.store.get('camera');
    readonly glDom = this.store.get('gl', 'domElement');
}
