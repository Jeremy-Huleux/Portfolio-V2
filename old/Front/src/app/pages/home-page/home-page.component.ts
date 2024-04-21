import { Component, ElementRef} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [FontAwesomeModule]
})

export class HomePageComponent {
  
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

  //TODO: trouver le moyen de savoir dans quel section est la fonction puis mettre le style adapter dynamique 


}
  

  
