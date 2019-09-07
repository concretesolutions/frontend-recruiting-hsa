import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSharedComponent } from './views/search-shared/search-shared.component';
import {GitUserService} from './service/git-user/git-user.service';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SearchSharedComponent],
  exports: [
    SearchSharedComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [GitUserService]
})
export class ViewsModule { }
