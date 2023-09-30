import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MenuPositionX, MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'hpb-ui-icon-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, MatButtonModule],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu" attr.aria-label="{{ ariaLabel }}">
      <mat-icon [color]="iconColor">{{ icon }}</mat-icon>
    </button>
    <mat-menu #menu="matMenu" [yPosition]="yPosition" [xPosition]="xPosition">
      <ng-content></ng-content>
    </mat-menu>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMenuComponent {
  @Input() ariaLabel = '';
  @Input() icon = 'more_vert';
  @Input() iconColor: ThemePalette = 'accent';
  @Input() yPosition: MenuPositionY = 'below';
  @Input() xPosition: MenuPositionX = 'before';
}
