import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilCommonService } from '../../service/util-common.service';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css'],
  providers: [UtilCommonService]
})
export class HeaderSearchComponent implements OnInit {

  @Input() texto: string;
  public objSubmit: any = {isLoading : false};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Call router details
   *
   * @returns void
   */
  onSubmit(): void {

    if (this.texto && this.texto.trim() !== "") {
      this.objSubmit.isLoading = true;

      // this function will redirect to a dummy route and quickly return to the destination route without the user realizing it.
      this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigate([ '/details', this.texto ]));
      }
    }
  }
