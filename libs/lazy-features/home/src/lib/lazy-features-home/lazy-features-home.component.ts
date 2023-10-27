import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'hpb-home-lazy-features-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './lazy-features-home.component.html',
  styleUrls: ['./lazy-features-home.component.scss'],
})
export class LazyFeaturesHomeComponent {}
