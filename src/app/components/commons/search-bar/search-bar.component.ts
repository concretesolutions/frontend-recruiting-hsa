import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {
  @Input() searchValue = '';
  constructor(private route: Router) {}

  ngOnInit(): void {}

  public validateRoute(url: string): string {
    if (url === '') {
      return '';
    }
    const lowUrl = url.toLowerCase();
    return `/search/user/${lowUrl}`;
  }

  public handleEnter = ($event: KeyboardEvent) => {
    if ($event.key === 'Enter') {
      const goTo = this.validateRoute(this.searchValue);
      if (goTo !== '') {
        this.route.navigate([goTo]);
      }
    }
  }
}
