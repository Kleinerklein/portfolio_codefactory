import { Component, OnInit } from '@angular/core';
import { Collapse, initTE } from "tw-elements";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    initTE({ Collapse })
  }
  

  scrollTo(section: string ) {
    const selected = document.querySelector('#' + section) as any;
    var headerOffset = 75;
    var elementPosition = selected.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
 });
    // selected.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
  
}
