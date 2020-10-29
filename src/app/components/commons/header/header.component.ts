import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() searchValue: string;
  public smallLogo = true;
}
