/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GitUserProfileComponent } from './components/git-user-profile/git-user-profile.component';

/* Services */
import { GithubUserApiService } from './services/github-user-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearcherComponent,
    PageNotFoundComponent,
    GitUserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubUserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
