import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-clock',
  imports: [MatMenuModule, MatExpansionModule, MatButtonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css',
  standalone: true
})
export class ClockComponent {
  title = 'clock-ghibli';
  time = new Date();
  Math = Math;

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
