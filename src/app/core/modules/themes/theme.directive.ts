import { Directive, OnDestroy, OnInit, ElementRef, Inject } from '@angular/core';
import { Subscription, UnsubscriptionError } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from './theme.service';
import { THEMES } from './themes.constants';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {
  private themeName = 'LIGHI_THEME';
  private themeServiceSubscription: Subscription;
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: any,
    private themeService: ThemeService
  ) { }
  ngOnInit() {
    this.updateTheme(this.themeName);
    this.themeService.getActiveTheme().subscribe(themeName => {
      this.themeName = themeName;
      this.updateTheme(this.themeName);
    });
  }
  updateTheme(themeName) {
    const element = this.elementRef.nativeElement;
    console.log(element);
    const theme = THEMES[themeName];
    // tslint:disable-next-line:forin
    for (const key in theme) {
      element.style.setProperty(key, theme[key]);
      this.document.body.style.setProperty(key, theme[key]);
    }
  }
  ngOnDestroy() {
    if (this.themeServiceSubscription) { this.themeServiceSubscription.unsubscribe(); }
   }
}
