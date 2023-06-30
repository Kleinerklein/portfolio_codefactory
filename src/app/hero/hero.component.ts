import { Component, OnInit,AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare var Particles: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('move', [
      state('0', style({ transform: 'translateY(0)' })),
      state('1', style({ transform: 'translateY(24px)' })),
      transition('0 <=> 1',[ animate('1.5s ease-in-out')])
    ])
  ]
})
export class HeroComponent implements AfterViewInit, OnInit{

  animationState: string = '0';
  
  ngOnInit() {
    setInterval(() => {
      this.animationState = this.animationState === '0' ? '1' : '0';
    }, 1500);
  }
 
  
  ngAfterViewInit() {

    // animation


    // particles
    window.onload = () => {
      Particles.init({
        selector: '.background',
        maxParticles: 160,
        color: '#26c31c',
        sizeVariations: 5,
        speed: 1
      });
    };
  }
  scrollTo(section: string ) {
    const selected = document.querySelector('#' + section) as any;
    var headerOffset = 350;
    var elementPosition = selected.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}
