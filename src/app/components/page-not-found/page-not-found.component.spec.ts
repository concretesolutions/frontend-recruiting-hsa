import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { SearchComponent } from '../search/search.component';
import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from '../home/home.component';
import { ResultComponent } from '../result/result.component';

import { FormsModule } from '@angular/forms';
import { GetUserDataService } from 'src/app/services/get-user-data.service';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import { AppRoutingModule } from '../../app-routing.module';


describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent, SearchComponent, DetailsComponent, HomeComponent, ResultComponent ],
      imports: [ FormsModule, HttpClientModule, AppRoutingModule ],
      providers: [ GetUserDataService, HttpClient ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
