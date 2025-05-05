import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkActive, RouterLink , RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "portfolio";

  ngOnInit() {
    this.generateStars(10);
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

}
