import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/modules/themes/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss', './nav.component.css']
})
export class NavComponent implements OnInit {
  public themName: string;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.getActiveTheme().subscribe(themName => {
      this.themName = themName;
    });
  }
  // 点击切换主题色
  changeTheme() {
    console.log(this.themName);
    if (this.themName === 'LIGHT_THEME') {
      this.themName = 'BLACK_THEME';
      this.themeService.setActiveTheme(this.themName);
    } else {
      this.themName = 'LIGHT_THEME';
      this.themeService.setActiveTheme(this.themName);
    }
  }

}
