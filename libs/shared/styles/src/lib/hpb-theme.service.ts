import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

import { HpbTheme } from './models';

@Injectable({
  providedIn: 'root',
})
export class HpbThemeService {
  private readonly _lightThemeClass = 'light-theme';

  private _document: Document = inject(DOCUMENT);

  private getTheme(): HpbTheme {
    const storedTheme = localStorage.getItem('hpb-theme');
    if (storedTheme) {
      return storedTheme as HpbTheme;
    }

    const darkModeMatch = window.matchMedia('(prefers-color-scheme: dark)');
    return darkModeMatch.matches ? 'dark' : 'light';
  }

  private setTheme(theme: HpbTheme): void {
    localStorage.setItem('hpb-theme', theme);
    this._document.body.classList.remove(this._lightThemeClass);
    if (theme === 'light') {
      this._document.body.classList.add(this._lightThemeClass);
    }
  }

  init(): HpbTheme {
    const theme = this.getTheme();
    this.setTheme(theme);
    return theme;
  }

  toggleTheme(): void {
    const theme = this.getTheme();
    this.setTheme(theme === 'light' ? 'dark' : 'light');
  }
}
