import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { BouncingIcon } from '../../../../../@types/bouncingicon';
import { ITag } from '../../../../../@types/tag';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';
import { getImageUrl } from '../../../utils/image-url.util';

@Component({
  selector: 'app-boucing-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouncingicons.component.html',
  styleUrl: './bouncingicons.component.scss'
})

export class BouncingIconsComponent {

  icons$: Observable<ITag[]>;
  icons: ITag[] = [];

  @ViewChild('iconScreen', { static: true }) screenRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('iconDiv') iconElements!: QueryList<ElementRef<HTMLDivElement>>;

  private bouncingIcons: BouncingIcon[] = [];

  constructor(private apiService: ApiService, private detect: ChangeDetectorRef) {
    this.icons$ = this.apiService.getAllTags();
    this.icons$.subscribe(data => {
    this.icons = data;

      //utilisation de detect : ChangeDetectorRef pour demander a Angular de se "reload" aprés un changement effectué (en resumé)
    this.detect.detectChanges();
    this.initBouncingIcons();
    })
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
      el.style.backgroundImage = `url(${getImageUrl(iconData.icon)})`;
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
}
