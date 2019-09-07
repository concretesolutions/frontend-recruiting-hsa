import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ViewsModule} from '../../shared/views.module';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ViewsModule
  ]
})
export class SearchModule { }
