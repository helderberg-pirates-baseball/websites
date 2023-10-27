import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './pages-landing.component.html',
  styleUrls: ['./pages-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesLandingComponent {}
