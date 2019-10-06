import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [SearchBarComponent, LayoutComponent, NotFoundComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [SearchBarComponent, LayoutComponent, NotFoundComponent]
})
export class CoreModule { }
