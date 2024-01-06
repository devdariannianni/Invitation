import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
  
  showSmiley: boolean = false;
  showThanksMessage: boolean = false; // Add this variable
  noButtonPosition: any = { top: '0', left: '0' };
  noButtonInitialPosition: any = {}; 
  
  onYesClick() {
    this.showSmiley = true;
    this.showThanksMessage = true; // Display the thanks message
  }
  
  onNoHover() {
    if (!this.noButtonInitialPosition.top) {
      this.noButtonInitialPosition = { ...this.noButtonPosition };
    }
    this.generateRandomPosition();
  }
  
  generateRandomPosition() {
    const randomTop = Math.floor(Math.random() * window.innerHeight);
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    this.noButtonPosition = { top: `${randomTop}px`, left: `${randomLeft}px` };
  }
}
