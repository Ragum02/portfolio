import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, CdkDrag],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
