import { Component} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-foot-nav-bar',
  standalone: true,
  templateUrl: './foot-nav-bar.component.html',
  styleUrls: ['./foot-nav-bar.component.scss'],
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    MatCheckboxModule
]
})

export class FootNavBarComponent {



}
