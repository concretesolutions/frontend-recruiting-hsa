import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepositoriesComponent } from './repositories.component';
import { RepositoriesService } from './repositories.service';
import { RepositoriesResolver } from './repositories-resolve.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [RepositoriesComponent, UserProfileComponent, RepositoryComponent],
  imports: [
    CommonModule,
    RepositoriesRoutingModule
  ],
  providers: [RepositoriesService, RepositoriesResolver]
})
export class RepositoriesModule { }
