import { Component, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { PlatformService } from '../../services/platform.service';
import Rellax from 'rellax';
import { gsap } from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';
import { ScrollTrigger } from 'gsap/all';

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
     * GSAP pour le h1 animé 
     */
    // gsap.registerPlugin(SplitText);
    // this.title = gsap.timeline();
    // this.text = document.getElementById("h1");
    // this.split = new SplitText("#h1", {type:"chars,words"});
    // this.chars = this.split.chars;
    // this.centerIndex = Math.floor(this.chars.length / 2);
    // for(let i = 0; i < this.chars.length; i++){
    //   //alert("Dedans");
    //   this.title.from(this.chars[i], {
    //     x:(i - this.centerIndex) * 40,
    //     opacity:0, 
    //     duration: 1.8, 
    //     ease: "power2"
    //   }, i * 0.1);
    // }
    // this.title.fromTo(this.text, {z:500,  visibility:"visible"}, {z:-1000, ease:"slow(0.1, 0.9)", duration: 4}, 0);
    /**
     * GSAP pour chaque logo
     */
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
  /**
   * GSAP pour afficher les section gs_reveal from right or from left
   */
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

  //à l'initialisation de la page coté client on initialise le script rellax 
  // et le GSAP pour eviter les bug dûe au SSR
  ngOnInit(){
    if(this.platformService.isOnVue()){
      this.rellax = new Rellax('.rellax');
      this.gsapisation();
      this.affichage();
    }  
  }

}