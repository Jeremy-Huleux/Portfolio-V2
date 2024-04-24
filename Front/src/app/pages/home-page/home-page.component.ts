import { Component, ElementRef, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { PlatformService } from '../../services/platform.service';
import Rellax from 'rellax';

import { gsap } from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';




@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [FontAwesomeModule]
})

export class HomePageComponent implements OnInit{
  constructor(private platformService: PlatformService) { }
  
  /**
   * Creation des icones avec faBar (font awasome)
   */
  facebook = faFacebookF;
  twitter = faXTwitter;
  linkedin = faLinkedinIn;
  calendar = faCalendarDays;
  
  /**
   * Variables
   */
  rellax!: any;
  gsap!: any;
  styles: string[] = [
                        '--clr: #000000; --txt: #fff',
                        '--clr: #3eeb69; --txt: #fff',
                        '--clr: #3e7beb; --txt: #fff', 
                        '--clr: #eb3ece88; --txt: #fff', 
                        '--clr: #d1eb3e; --txt: #fff', 
                        '--clr: #f7c59f; --txt: #fff'
                      ]; // doit contenir les variable CSS dynamique : --clr: #081b29; --txt: #fff
  color!: String;
  text!: any;
  svg!: any;
  title!: any;
  chars! :any;
  split! :any;
  centerIndex! : any;
  //TODO: trouver le moyen de savoir dans quel section est la fonction puis mettre le style adapter dynamique 

  gsapisation(){
    /**
     * ICI le GSAP pour le h1 animé 
     */
    gsap.registerPlugin(SplitText);
    this.title = gsap.timeline();
    this.text = document.getElementById("h1");
    this.split = new SplitText("#h1", {type:"chars,words"});
    this.chars = this.split.chars;
    this.centerIndex = Math.floor(this.chars.length / 2);
    for(let i = 0; i < this.chars.length; i++){
      //alert("Dedans");
      this.title.from(this.chars[i], {
        x:(i - this.centerIndex) * 40,
        opacity:0, 
        duration: 1.8, 
        ease: "power2"
      }, i * 0.1);
    }
    this.title.fromTo(this.text, {z:500, y:74, visibility:"visible"}, {z:-1000, ease:"slow(0.1, 0.9)", duration: 4}, 0);
    this.title.to(this.text, {rotationX:-720, autoAlpha:0, scale:0.3, duration: 1.5, ease:"power2.inOut"}, "-=1.5");
    /**
     * 
     * tl = gsap.timeline(),
      text = $("#whyGSAP"),
      split = new SplitText("#whyGSAP", {type:"chars,words"}),
      chars = split.chars,
      centerIndex = Math.floor(chars.length / 2),
      i;
  for (i = 0; i < chars.length; i++) {
    tl.from(chars[i], {x:(i - centerIndex) * 40, opacity:0, duration: 1.8, ease: "power2"}, i * 0.1);
  }
  tl.fromTo(text, {z:500, y:74, visibility:"visible"}, {z:-1000, ease:"slow(0.1, 0.9)", duration: 4}, 0);
  tl.to(text, {rotationX:-720, autoAlpha:0, scale:0.3, duration: 1.5, ease:"power2.inOut"}, "-=1.5");
  return tl;
     * 
     */
    this.title.fromTo(this.text, {z:500, y:74, visibility:"visible"}, {z:-1000, ease:"slow(0.1, 0.9)", duration: 4}, 0);
    this.title.to(this.text, {rotationX:-720, autoAlpha:0, scale:0.3, duration: 1.5, ease:"power2.inOut"}, "-=1.5");
  



    this.svg = document.querySelector(".angular");
    this.gsap = gsap.timeline();
    this.gsap = gsap.from(this.svg, { 
      y: '-150vh', 
      duration: 1, 
      opacity: 0,
      delay: 0
    });
    this.svg = document.querySelector(".typescript");
    this.gsap = gsap.timeline();
    this.gsap = gsap.from(this.svg, { 
      y: '-150vh', 
      duration: 1, 
      opacity: 0,
      delay: 0.3
    });
    this.svg = document.querySelector(".sass");
    this.gsap = gsap.timeline();
    this.gsap = gsap.from(this.svg, { 
      y: '-150vh', 
      duration: 1, 
      opacity: 0,
      delay: 0.6
    });
    this.svg = document.querySelector(".css3");
    this.gsap = gsap.timeline();
    this.gsap = gsap.from(this.svg, { 
      y: '-150vh', 
      duration: 1, 
      opacity: 0,
      delay: 0.9
    });
    this.svg = document.querySelector(".ssr");
    this.gsap = gsap.timeline();
    this.gsap = gsap.from(this.svg, { 
      y: '-150vh', 
      duration: 1, 
      opacity: 0,
      delay: 1.2
    });
    this.svg = document.querySelector(".gsap");
    this.gsap = gsap.timeline();
    this.gsap = gsap.from(this.svg, { 
      y: '-150vh', 
      duration: 1,
      opacity: 0, 
      delay: 1.5
    });
  }
  //à l'initialisation de la page coté client on initialise le script rellax 
  ngOnInit(){
    if(this.platformService.isOnVue()){
      this.rellax = new Rellax('.rellax');
      this.gsapisation();
    }  
  }

}
  /**
  function whyGSAP() {
  var tl = gsap.timeline(),
      text = $("#whyGSAP"),
      split = new SplitText("#whyGSAP", {type:"chars,words"}),
      chars = split.chars,
      centerIndex = Math.floor(chars.length / 2),
      i;
  for (i = 0; i < chars.length; i++) {
    tl.from(chars[i], {x:(i - centerIndex) * 40, opacity:0, duration: 1.8, ease: "power2"}, i * 0.1);
  }
  tl.fromTo(text, {z:500, y:74, visibility:"visible"}, {z:-1000, ease:"slow(0.1, 0.9)", duration: 4}, 0);
  tl.to(text, {rotationX:-720, autoAlpha:0, scale:0.3, duration: 1.5, ease:"power2.inOut"}, "-=1.5");
  return tl;
}
   */

  
