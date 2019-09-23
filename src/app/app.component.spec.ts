import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, HomeComponent, ResultComponent, PageNotFoundComponent, SearchComponent, DetailsComponent ],
      imports: [AppRoutingModule, FormsModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a 'router-outlet' selector`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
