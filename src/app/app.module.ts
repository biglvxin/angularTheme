import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ThemeDirective } from './core/modules/themes/theme.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ThemeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
