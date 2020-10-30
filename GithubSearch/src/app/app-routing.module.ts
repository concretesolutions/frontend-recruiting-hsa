import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', 
  loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) 
  }, 
  { path: 'users/:id', 
  loadChildren: () => import('./components/pages/users/users.module').then(m => m.UsersModule) 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
