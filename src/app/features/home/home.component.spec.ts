import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../search/search.component';
import { ResultsComponent } from '../results/results.component';
import { DetailsComponent } from '../details/details.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GithubSearchService } from 'src/app/services/github-search.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SearchComponent, ResultsComponent, DetailsComponent, NotFoundComponent ],
      imports: [ FormsModule, AppRoutingModule, HttpClientModule ],
      providers: [ GithubSearchService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
