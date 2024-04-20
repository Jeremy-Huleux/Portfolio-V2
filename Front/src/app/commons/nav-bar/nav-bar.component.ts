import { Component, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { accueilColleActive, burgerAnimation} from './nav-bar.animations';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations : [burgerAnimation, accueilColleActive]
})
export class NavBarComponent implements OnInit{
  ngOnInit(): void {
    
  }
}


