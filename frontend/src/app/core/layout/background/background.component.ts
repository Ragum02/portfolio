import { animate, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
  animations: [
    trigger('starAnimation', [
      transition(':enter', [
        style({
          transform: 'scale(0)',
          opacity: 0,
        }),
        animate('2s ease-in', style({
          transform: 'scale(1)',
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          transform: 'scale(0)',
          opacity: 0,
        })),
      ]),
    ]),
  ],
})

export class BackgroundComponent implements OnInit{
  stars: Array<any> = [];

  ngOnInit(): void {
    this.generateStars(20);
  }

  generateStars(count: number): void {
    for (let i = 0; i < count; i++) {
      const star = this.createStar();
      this.stars.push(star);
    }
  }

  createStar(): any {
    const size = Math.random() * 0.25 + 1.0;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 10000 + Math.random() * 7000;

    return {
      id: Math.random().toString(36).substring(7),
      x,
      y,
      size,
      duration,
    };
  }
}
