import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { HomeComponent } from './component/home/home.component';
import { DetailsComponent } from './component/details/details.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details/:username', component: DetailsComponent },
  // Default
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
