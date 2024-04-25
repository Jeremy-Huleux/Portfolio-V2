import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import Rellax from 'rellax';
import { gsap } from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-test-page',
  standalone : true,
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {    

constructor(private platformService: PlatformService) { }

affichage(){
  gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.gs_reveal').forEach((elem: any) => {
      this.hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        //markers: true,
        onEnter: () => { this.animateFrom(elem) },
        onEnterBack: () => { this.animateFrom(elem, -1) },
        onLeave: () => { this.hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  }

  animateFrom(elem: any, direction?: number): void {
    direction = direction || 1;
    let x = 0,
        y = direction * 100;
    if (elem.classList.contains('gs_reveal_fromLeft')) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
      x = 100;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = '0';
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto'
    });
  }

  hide(elem: any): void {
    gsap.set(elem, {autoAlpha: 0});
  }
  ngOnInit() {
    if(this.platformService.isOnVue()){
      this.affichage();
    }  
  }
}







