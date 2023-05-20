import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="timeline">
  <div class="status" *ngFor="let status of statusArray; let i = index; let last = last">
    <div class="circle" [ngClass]="{ 'completed': status.completed }">
      <span *ngIf="status.completed">&#10003;</span>
    </div>
    <div *ngIf="!last" class="line"></div>
    <div *ngIf="i < statusArray.length - 1" class="line-horizontal" [ngStyle]="{ 'background-color': status.completed ? 'blue' : 'gray' }"></div>
  </div>
</div>

  `,
})
export class App {
  statusArray = [
    { completed: true },
    { completed: false },
    { completed: false },
  ];
}

bootstrapApplication(App);
