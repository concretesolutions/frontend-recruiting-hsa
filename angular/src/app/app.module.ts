import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Component
import { AppComponent } from './app.component';
import { DetailsComponent } from './component/details/details.component';
import { HeaderSearchComponent } from './component/header-search/header-search.component';
import { HomeComponent } from './component/home/home.component';
import { ImageDetailsComponent } from './component/image-details/image-details.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RepoDetailsComponent } from './component/repo-details/repo-details.component';

// Common
import { LoadingErrorComponent } from './component/common/loading-error/loading-error.component';
import { MensajeGenericoComponent } from './component/common/mensaje-generico/mensaje-generico.component';

// Directive
import { OnlyCharactersValidDirective } from './directive/only-characters-valid.directive';

// Pipe
import { SafePipe } from './pipe/safe.pipe';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Service
import { ErrorHandlerService } from './service/error-handler.service';
import { UtilCommonService } from './service/util-common.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingErrorComponent,
    MensajeGenericoComponent,
    SafePipe,
    DetailsComponent,
    HeaderSearchComponent,
    OnlyCharactersValidDirective,
    NotFoundComponent,
    ImageDetailsComponent,
    RepoDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ErrorHandlerService,
    UtilCommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
