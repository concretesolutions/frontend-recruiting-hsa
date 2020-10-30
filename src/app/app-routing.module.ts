import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { UserPageComponent } from './components/pages/user-page/user-page.component';

const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  {
    path: 'search/user/:user',
    component: UserPageComponent
  },
  { path: '**', redirectTo: '/search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
