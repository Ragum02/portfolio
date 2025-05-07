import { Component, effect, viewChild } from '@angular/core';
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular'

@Component({
  selector: 'app-projects',
  imports: [EmblaCarouselDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private emblaRef = viewChild<EmblaCarouselDirective>(EmblaCarouselDirective);

    emblaApi?: EmblaCarouselType
   options = { loop: true }

  constructor() {
    effect(() => {
      this.emblaApi = this.emblaRef()?.emblaApi;
    });
  }
}
