import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { DetailsComponent } from './features/details/details.component';
import { SearchComponent } from './features/search/search.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'notfound', component: NotFoundComponent
  },
  {
    path: 'details',  component: DetailsComponent
  },
  {
    path: '**',  redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
