import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'notFound', component: NotFoundComponent },
	{ path: 'details/:username', component: ResultsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
