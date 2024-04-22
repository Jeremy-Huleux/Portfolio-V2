import { Component, HostListener, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlatformService } from '../../services/platform.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {


  navHeight! : any;
  tailleAccueil! : any;
  tailleNavBar! : any;
  class : string = "sectionContent";
  scroll! : any;
  constructor(private platformService: PlatformService) { }

  // à l'init de la page on verifie si on est dans la vue client si oui on
  // lance le listener et on set accueil a actif 
  ngOnInit(){
    // if(this.platformService.isOnVue()){
    //   this.onScroll();
    // }  
  }
  
  @HostListener('window:scroll', ['$event'])
    onScroll(){
      // on initialise scroll
        this.scroll = document.documentElement.scrollTop;
        // On change la navbar dès que le scroll est activé "navBar" à "navBar colle"
        this.tailleAccueil = document.getElementById("accueil")?.clientHeight;
        //TODO : Récupéré la taille du navbar pour le client pour rendre la fixation full responsive
        //FIXME : tailleNavBar est toujours null...
        this.tailleNavBar = document.getElementById(this.class)?.offsetHeight;
        if(document.documentElement.scrollTop > this.tailleAccueil - 140){
          this.class = 'sectionContent fixed';
        }else if(document.documentElement.scrollTop < this.tailleAccueil + 140) {
          this.class = 'sectionContent';
        }
      }

}



