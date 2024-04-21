import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./commons/nav-bar/nav-bar.component";
import { FooterComponent } from "./commons/footer/footer.component";
import { FootNavBarComponent } from "./commons/foot-nav-bar/foot-nav-bar.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        NavBarComponent,
        FooterComponent,
        FootNavBarComponent
    ]
})

export class AppComponent {
  title = 'Front';
}
