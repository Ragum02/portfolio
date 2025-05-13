import {Component, ElementRef , ViewChild} from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { BouncingIconsComponent } from "./core/layout/boucingicons/bouncingicons.component";
import { BackgroundComponent } from "./core/layout/background/background.component";

@Component({
  selector: 'app-root',
  imports: [RouterLinkActive, RouterLink, RouterOutlet, CommonModule, BouncingIconsComponent, BackgroundComponent],
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


  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  duration = 0;
  currentTime = 30;
  volume = 0.03;
  isPlaying = false

  initAudio() {
    const audio = this.audioPlayer.nativeElement;
    this.duration = audio.duration;
    audio.currentTime = this.currentTime;
    audio.volume = this.volume;
  }

  toggleLecture() {
    const audio = this.audioPlayer.nativeElement;
    if (audio.paused) {
      this.isPlaying = true;
      audio.play();
    } else {
      this.isPlaying = false;
      audio.pause();
    }
  }

  updateTime() {
    this.currentTime = this.audioPlayer.nativeElement.currentTime;
  }

  seek(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.audioPlayer.nativeElement.currentTime = value;
  }

  changerVolume(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.volume = value;
    this.audioPlayer.nativeElement.volume = value;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

}
