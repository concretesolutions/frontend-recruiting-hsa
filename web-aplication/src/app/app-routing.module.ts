import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './feature/search/search.component';
import {SearchModule} from './feature/search/search.module';
import {DetailComponent} from './feature/detail/detail.component';
import {DetailModule} from './feature/detail/detail.module';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'detail', component: DetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SearchModule,
    DetailModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
