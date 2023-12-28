import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('boxContainer', { static: true }) boxContainer!: ElementRef;
  boxCount = 0; 
  lastOperationTime = 0; 

  constructor(private renderer: Renderer2) {}

  addBoxes() {
    const startTime = performance.now();
    for (let i = 0; i < 10; i++) {
      const box = this.renderer.createElement('div');
      this.renderer.addClass(box, 'box');
      this.renderer.appendChild(this.boxContainer.nativeElement, box);
      this.boxCount++; 
    }
    const endTime = performance.now();
    this.lastOperationTime = endTime - startTime;
  }

  deleteBoxes() {
    const startTime = performance.now();
    const container = this.boxContainer.nativeElement;
    for (let i = 0; i < 10 && container.firstChild; i++) {
      this.renderer.removeChild(container, container.firstChild);
      this.boxCount = Math.max(0, this.boxCount - 1); 
    }
    const endTime = performance.now();
    this.lastOperationTime = endTime - startTime;
  }
}
