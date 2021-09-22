import { Component, OnDestroy, OnInit } from '@angular/core';
import { DEFAULT_THEME } from '../../styles/theme.default';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentTheme = DEFAULT_THEME.name;
  constructor() {}

  ngOnInit() {

  }

  ngOnDestroy() {
  }
}
