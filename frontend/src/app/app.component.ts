import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { BouncingIconsComponent } from "./core/layout/boucingicons/bouncingicons.component";
import { BackgroundComponent } from "./core/layout/background/background.component";
import { HeaderComponent } from "./core/layout/header/header.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { NavbarComponent } from './core/layout/navbar/navbar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, BouncingIconsComponent, BackgroundComponent, HeaderComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),

        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0 }))
          ], { optional: true }),

          query(':enter', [
            animate('300ms ease-in', style({ opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})


export class AppComponent {
prepareRoute(outlet: RouterOutlet) {
  return outlet?.activatedRouteData?.['animation'];
}
  title = "Accueil";
}
