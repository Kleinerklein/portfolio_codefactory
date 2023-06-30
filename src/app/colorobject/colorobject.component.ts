import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ITech } from 'src/data/ITech';
import { techs } from 'src/data/techs';
import * as THREE from 'three';
import { DecalGeometry } from 'three-stdlib';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-colorobject',
  templateUrl: './colorobject.component.html',
  styleUrls: ['./colorobject.component.scss']
})
export class ColorobjectComponent implements  AfterViewInit {

  techs: ITech [] = techs
  ngAfterViewInit(): void {
    for(let i = 0; i < this.techs.length; i ++){
        this.showModel(i);
    }
    
  }

  showModel(index: number) {
    //texture
    const texture = new THREE.TextureLoader().load(this.techs[index].icon);
    
    // scene
    const scene = new THREE.Scene();
    // geometry
    const geometry = new THREE.SphereGeometry(1, 35, 40);
    const material = new THREE.MeshStandardMaterial({ color: '#ffffff'});
    material.flatShading = true;
    material.polygonOffset = true;
    material.polygonOffsetFactor = -5;
    // mesh
    const mesh = new THREE.Mesh(geometry, material,);
    scene.add(mesh);
    // add decal ontop of geometry
    const decal = new DecalGeometry(
      mesh,
      new THREE.Vector3(0,0,1.36),
      new THREE.Euler(0,0, 0, 'YXZ'),
      new THREE.Vector3(1.6,1.6,1.6)
    );
    // nwe material for decal
    const materialBack = new THREE.MeshStandardMaterial({ 
      color: '#ffffff',
      map: texture,
      transparent: true,
      opacity: 1,
      flatShading: true,
      polygonOffset:true,
      polygonOffsetFactor: -5,  
    });
    // add new decal
    const meshBack = new THREE.Mesh( decal, materialBack );
    scene.add( meshBack );

    // add decal back
    const decalBack = new DecalGeometry(
      mesh,
      new THREE.Vector3(0.2,0,-1.2),
      new THREE.Euler(0,160, 0, 'YXZ'),
      new THREE.Vector3(1.6,1.6,1.6)
    );
    const meshFront = new THREE.Mesh( decalBack, materialBack );
    scene.add( meshFront );

    // sizes
    const sizes = {
      width: 150,
      height: 150
    };
    // camera
    const camera = new THREE.PerspectiveCamera(17, sizes.width / sizes.height, 0.1, 1000);
    camera.position.z = 10;
    scene.add(camera);
    // light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    camera.add(light);

    // renderer
    // create new component for each ball to later make the positionening easier
    const canvas = document.createElement('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(sizes.width, sizes.height);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;

    const randomNumber =
    Math.floor(Math.random() * 2) === 0 // Randomly choose between positive and negative numbers
      ? Math.random() * (3 - 2) + 2 // Positive random number between 3 and 2
      : Math.random() * (3 - 2) - 3; // Negative random number between -3 and -2

    controls.autoRotateSpeed =  randomNumber;

    // update renderer and controls
    const animate = () => {
      controls.update(); // Update the controls on each frame

     

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // animate and add to div 
    animate();
    const componentDiv = document.querySelector('.balls') as HTMLElement;
    componentDiv.appendChild(canvas);
    
  }
}
