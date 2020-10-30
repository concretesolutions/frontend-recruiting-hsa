import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent  } from './search/search.component';
//import { UsersModule } from './../users/users.module';



@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[SearchComponent]
})
export class HomeModule { }
