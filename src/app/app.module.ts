import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { UserPageComponent } from './components/pages/user-page/user-page.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { ListItemComponent } from './components/commons/list-item/list-item.component';
import { LogoComponent } from './components/commons/logo/logo.component';
import { SearchBarComponent } from './components/commons/search-bar/search-bar.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    ListItemComponent,
    LogoComponent,
    SearchBarComponent,
    SearchPageComponent,
    UserPageComponent,
    AppComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
