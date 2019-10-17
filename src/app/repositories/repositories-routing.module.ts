import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositoriesComponent } from './repositories.component';
import { RepositoriesResolver } from './repositories-resolve.guard';

const routes: Routes = [
  {
    path: ':username',
    component: RepositoriesComponent,
    resolve: {
      userDetails: RepositoriesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
