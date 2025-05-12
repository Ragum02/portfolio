import {Component, ElementRef, QueryList, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { animate, group, query, style, transition, trigger } from '@angular/animations';


interface BouncingIcon {
  el: HTMLElement;
  x: number;
  y: number;
  dx: number;
  dy: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterLinkActive, RouterLink , RouterOutlet, CommonModule],
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


export class AppComponent implements OnInit  {
prepareRoute(outlet: RouterOutlet) {
  return outlet?.activatedRouteData?.['animation'];
}
  title = "Accueil";
  icons: any[] = [];

  @ViewChild('iconScreen', { static: true }) screenRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('iconDiv') iconElements!: QueryList<ElementRef<HTMLDivElement>>;

  private bouncingIcons: BouncingIcon[] = [];


  async ngOnInit() {
    const response = await fetch('http://localhost:8000/api/tags')

    this.icons = Object.values(await response.json());
    setTimeout(() => {
    this.generateStars(30);
    this.initBouncingIcons();
  }, 0);
  }
  generateStars(count: number): void {
    const container = document.querySelector('.space-background');
    if (!container) return;

    for (let i = 0; i < count; i++) {
      this.createStar(container);
    }
  }

  createStar(container: Element): void {
    const star = document.createElement('div');
    const size = Math.random() * 0.5 + 1.0;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 10000 + Math.random() * 4000;

    star.className = 'star';
    Object.assign(star.style, {
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}ms`,
    });

    // Supprimer après l'animation et recréer une autre étoile
    setTimeout(() => {
      container.removeChild(star);
      this.createStar(container);
    }, duration);

    container.appendChild(star);

  }

initBouncingIcons(): void {
  const screen = this.screenRef.nativeElement;

  this.iconElements.forEach((elRef, index) => {
    const el = elRef.nativeElement;
    const iconData = this.icons[index];
    const x = Math.random() * (screen.clientWidth - 32);
    const y = Math.random() * (screen.clientHeight - 32);
    const dx = (Math.random() * 0.02 + 0.075) * (Math.random() < 0.5 ? -1 : 1);
    const dy = (Math.random() * 0.02 + 0.075) * (Math.random() < 0.5 ? -1 : 1);

    const icon: BouncingIcon = { el, x, y, dx, dy };
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    if (iconData && iconData.icon) {

      el.style.backgroundImage = `url(${iconData.icon})`;
      el.style.backgroundSize = 'contain';
      el.style.backgroundPosition = 'center';
      el.style.backgroundRepeat = 'no-repeat';
    }

    this.bouncingIcons.push(icon);
  });

  this.animate();
}

  private animate(): void {
    const screen = this.screenRef.nativeElement;

    this.bouncingIcons.forEach(icon => {
      icon.x += icon.dx;
      icon.y += icon.dy;

      // Collision avec les bords de l'écran
      const maxX = screen.clientWidth - 32;
      const maxY = screen.clientHeight - 32;
      if (icon.x <= 0) {
        icon.x = 0;  // Positionner l'icône directement au bord gauche
        icon.dx *= -1; // Inverser la direction de la vitesse horizontale
      } else if (icon.x >= maxX) {
        icon.x = maxX;  // Positionner l'icône directement au bord droit
        icon.dx *= -1;  // Inverser la direction de la vitesse horizontale
      }

      if (icon.y <= 0) {
        icon.y = 0;  // Positionner l'icône directement au bord supérieur
        icon.dy *= -1; // Inverser la direction de la vitesse verticale
      } else if (icon.y >= maxY) {
        icon.y = maxY;  // Positionner l'icône directement au bord inférieur
        icon.dy *= -1;  // Inverser la direction de la vitesse verticale
      }

      // Collision entre les icônes
      this.bouncingIcons.forEach(otherIcon => {
        if (icon === otherIcon) return;

        const distance = Math.sqrt(Math.pow(icon.x - otherIcon.x, 2) + Math.pow(icon.y - otherIcon.y, 2));
        const collisionDistance = 32; // distance minimale pour détecter la collision
        if (distance < collisionDistance) {
          // Inverser les directions des vitesses lors de la collision
          const tempDx = icon.dx;
          const tempDy = icon.dy;
          icon.dx = otherIcon.dx;
          icon.dy = otherIcon.dy;
          otherIcon.dx = tempDx;
          otherIcon.dy = tempDy;

          const overlap = collisionDistance - distance;
          const angle = Math.atan2(icon.y - otherIcon.y, icon.x - otherIcon.x);
          const offsetX = Math.cos(angle) * overlap / 2;
          const offsetY = Math.sin(angle) * overlap / 2;

          icon.x += offsetX;
          icon.y += offsetY;
          otherIcon.x -= offsetX;
          otherIcon.y -= offsetY;

        }
      });

      // Mettre à jour la position de l'icône
      icon.el.style.left = `${icon.x}px`;
      icon.el.style.top = `${icon.y}px`;
    });

    requestAnimationFrame(() => this.animate());
  }

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
