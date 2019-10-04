import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'ang-loading-error',
  templateUrl: './loading-error.component.html',
  styleUrls: ['./loading-error.component.css'],
})

export class LoadingErrorComponent implements DoCheck {

  @Input() data: any;
  @Input() lista?: any;
  @Input() error?: any;
  @Input() classLoad?: string;
  @Input() classError?: string;

  constructor() {}

  ngDoCheck(): void {
    if (this.data) {
      this.data.isError = !this.data.isLoading && !this.error ? false : true;
    }
  }
}
