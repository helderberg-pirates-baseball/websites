import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: `./not-found.component.html`,
  styleUrls: [`./not-found.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
