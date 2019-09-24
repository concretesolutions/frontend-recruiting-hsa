import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { DetailsComponent } from '../details/details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { GetUserDataService } from 'src/app/services/get-user-data.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../../app-routing.module';


describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, ResultComponent, SearchComponent, DetailsComponent, PageNotFoundComponent ],
      imports: [ FormsModule, AppRoutingModule, HttpClientModule ],
      providers: [ GetUserDataService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
