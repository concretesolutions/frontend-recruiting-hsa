import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'user/:user',
    component: UserComponent,
  },
  {
    path: '',
    component: SearchComponent,
  },
];
//UserComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
