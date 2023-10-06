import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HpbThemeService } from '@helderberg-pirates-baseball/shared/styles';
import { IconMenuComponent } from '@helderberg-pirates-baseball/shared/ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    IconMenuComponent,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  selector: 'helderberg-pirates-baseball-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _darkMode = false;
  private _theme = inject(HpbThemeService);

  get darkMode(): boolean {
    return this._darkMode;
  }

  set darkMode(value: boolean) {
    this._theme.toggleTheme();
  }

  ngOnInit(): void {
    const currentTheme = this._theme.init();
    this._darkMode = currentTheme === 'dark';
  }
}
