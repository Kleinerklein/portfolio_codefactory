import { Component, OnInit, AfterViewInit,HostListener } from '@angular/core';
import {Ripple, Input, initTE} from "tw-elements";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';
import * as THREE from 'three';
import { GLTFLoader,OrbitControls, } from 'three-stdlib';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit,AfterViewInit{
  textareaRows: number = 3;

  @HostListener('window:resize')
  onWindowResize() {
    this.textareaRows = window.innerWidth < 640 ? 5 : 3;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    initTE({ Ripple, Input})
    this.textareaRows = window.innerWidth < 640 ? 5 : 3;
  }
  ngAfterViewInit(): void {
    this.showGlobe()

    const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        const globeAni = entry.target.querySelector('.globe') as any;
        const contactAni = entry.target.querySelector('.contact') as any;
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          globeAni.classList.add('animate__fadeInLeft');
          contactAni.classList.add('animate__fadeInRight')
          return;
        }
        globeAni.classList.remove('animate__fadeInLeft')
        contactAni.classList.remove('animate__fadeInRight')
      });
    });
    
    
    observer.observe(document.querySelector('.fade') as any);

  }

  newContact = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    message: new FormControl('', Validators.required)
  })

  onSubmit(e: Event){

    console.log(this.newContact.value)
    if(this.newContact.valid){
      emailjs.sendForm('service_q2d0aq9', 'template_6264dkk', e.target as HTMLFormElement, 'avhEeJPCZ7EAcTWQC')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        Swal.fire({
          title: "Thanks for the message",
          icon: "success",
          text: "I will get in touch as soon as possible"
          })
        this.newContact.reset();
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          title: "Opps something went wrong",
          icon: "error",
          text: "Please try again"
          })
      });
      
    }
    else{
      Swal.fire({
        title: "Opps",
        icon: "error",
        text: "please fill out all fields and use a valid e-mail address"
        })
    }
   
  }
  
  showGlobe(){
    
    // scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    camera.position.set(0,0,15);

    // size
    let globeWidth:number = 300;
    let globeHeight: number = 300;
    if (window.innerWidth < 500){
      globeWidth = 250;
      globeHeight = 260;
       camera.position.set(0,0,28);
    }
    const canvas = document.getElementById('globe') as HTMLElement;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true });
    renderer.setSize(globeWidth,globeHeight)
  
 // Instantiate a loader
    const loader = new GLTFLoader();

    let obj: THREE.Group | undefined;
    loader.load(
      // resource URL
      'assets/3D-Models/earth.glb',
      // called when the resource is loaded
      function ( gltf ) {
        obj = gltf.scene
        scene.add( gltf.scene );
    
      },
      // called while loading is progressing
      function ( xhr ) {
    
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
      },
      // called when loading has errors
      function ( error ) {
    
        console.log( 'An error happened' );
    
      }
    );
    // scene.background = new THREE.Color(0xFFFFFF)
    const light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
    scene.add(light);

    
    
    
    
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableDamping = true;
    // controls.maxPolarAngle = 0;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // update renderer and controls
    const animate = () => {

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // animate 
    animate();  
  }
}
