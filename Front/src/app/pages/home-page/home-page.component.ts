import { Component, ElementRef, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { PlatformService } from '../../services/platform.service';
import Rellax from 'rellax';
import { gsap } from "gsap";





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
                        '--clr: #d1eb3e; --txt: #fff',
                        '--clr: #3eeb69; --txt: #fff',
                        '--clr: #3e7beb; --txt: #fff', 
                        '--clr: #eb3ece88; --txt: #fff', 
                        '--clr: #d1eb3e; --txt: #fff', 
                        '--clr: #f7c59f; --txt: #fff'
                      ]; // doit contenir les variable CSS dynamique : --clr: #081b29; --txt: #fff
  color!: String;
  text!: String;
  svg!: any;

  //TODO: trouver le moyen de savoir dans quel section est la fonction puis mettre le style adapter dynamique 

  gsapisation(){
    this.svg = document.querySelector(".angular");

    this.gsap = gsap.from(this.svg, { 
      rotation: 360, 
      duration: 2, 
      ease: "bounce.out" 
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
  

  
