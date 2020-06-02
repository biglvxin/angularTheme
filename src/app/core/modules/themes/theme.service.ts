import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LIGHT_THEME } from './themes.constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme = new BehaviorSubject(localStorage.getItem('activeTheme') || LIGHT_THEME);
  constructor() { }
  public getActiveTheme() {
    return this.activeTheme.asObservable();
  }
  public setActiveTheme(name) {
    localStorage.setItem('activeTheme', name);
    this.activeTheme.next(name);
  }
}
