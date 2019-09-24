import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../search/search.component';
import { ResultComponent } from '../result/result.component';
import { DetailsComponent } from '../details/details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { GetUserDataService } from 'src/app/services/get-user-data.service';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SearchComponent, ResultComponent, DetailsComponent, PageNotFoundComponent ],
      imports: [ FormsModule, AppRoutingModule, HttpClientModule ],
      providers: [ GetUserDataService, HttpClient ]

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
