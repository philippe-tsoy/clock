import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-valentine-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './valentine-page.component.html',
  styleUrl: './valentine-page.component.css',
  standalone: true
})
export class ValentinePageComponent{
    constructor(private cdr: ChangeDetectorRef){
    }




}
