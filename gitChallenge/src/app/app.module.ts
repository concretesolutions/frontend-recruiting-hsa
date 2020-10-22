import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { GithubApiService } from './sevices/github-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavSearchComponent } from './components/nav-search/nav-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    NavSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
