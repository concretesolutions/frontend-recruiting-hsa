import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { DetailsComponent } from '../app/components/details/details.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'navbar', component: NavbarComponent },
	{ path: 'details/:usuario', component: DetailsComponent },
	{ path: 'not-found', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
