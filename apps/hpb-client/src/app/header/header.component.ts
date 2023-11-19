import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HpbThemeService } from '@helderberg-pirates-baseball/shared/styles';
import { IconMenuComponent } from '@helderberg-pirates-baseball/shared/ui';

@Component({
  selector: 'helderberg-pirates-baseball-header',
  standalone: true,
  imports: [CommonModule, IconMenuComponent, MatMenuModule, MatSlideToggleModule, MatToolbarModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private _darkMode = false;
  private _theme = inject(HpbThemeService);

  get darkMode(): boolean {
    return this._darkMode;
  }

  set darkMode(_: boolean) {
    this._theme.toggleTheme();
  }

  ngOnInit(): void {
    const currentTheme = this._theme.init();
    this._darkMode = currentTheme === 'dark';
  }
}
