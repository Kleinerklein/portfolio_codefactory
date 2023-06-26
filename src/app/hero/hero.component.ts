import { Component, OnInit } from '@angular/core';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {
    this.creatThreeJsBox()
  }

  creatThreeJsBox():void{
    // add light and material
    const canvas = document.getElementById('canvas');
    const scene = new THREE.Scene();
  
    const material = new THREE.MeshToonMaterial();
  
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
  
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 2;
    pointLight.position.z = 2;
    scene.add(pointLight);

  // add object 
    const sphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(5, 1), 
      material
   );

   scene.add(sphere);
  // 
   const canvasSizes = {
    width: window.innerWidth/2,
    height: window.innerHeight/2,
   };

  // add the camera
   const camera = new THREE.PerspectiveCamera(
    75,
    canvasSizes.width / canvasSizes.height,
    0.001,
    1000
   );
   camera.position.z = 30;
   scene.add(camera);
  
   if (!canvas) {
    return;
   }
  
  //  add renderer
   const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
   });
   renderer.setClearColor(0xe232222, 1);
   renderer.setSize(canvasSizes.width, canvasSizes.height);

  // rezize when window resize
   window.addEventListener('resize', () => {
    canvasSizes.width = window.innerWidth/2;
    canvasSizes.height = window.innerHeight/2;
  
    camera.aspect = canvasSizes.width / canvasSizes.height;
    camera.updateProjectionMatrix();
  
    renderer.setSize(canvasSizes.width, canvasSizes.height);
    renderer.render(scene, camera);
  });

  renderer.render(scene, camera);

  const controls = new OrbitControls( camera, renderer.domElement );

  //controls.update() must be called after any manual changes to the camera's transform
  camera.position.set( 0, 20, 100 );
  controls.update();
  // animate
  const clock = new THREE.Clock();
  
    const animateGeometry = () => {
      const elapsedTime = clock.getElapsedTime();
  
      // Update animation objects
      sphere.rotation.x = elapsedTime;
      sphere.rotation.y = elapsedTime;
      sphere.rotation.z = elapsedTime;
  
     // Render
      renderer.render(scene, camera);
  
      // Call animateGeometry again on the next frame
      window.requestAnimationFrame(animateGeometry);
    };
  
    // animateGeometry();
   }
}
