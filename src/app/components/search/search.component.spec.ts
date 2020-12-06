import { ComponentFixture, TestBed, async, tick } from '@angular/core/testing';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';

import { SearchComponent } from './search.component';

// ADDED CLASS
class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [ 
        HttpClient,
        { provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should trigger the search function on click button', async() => {
    fixture.detectChanges();
    spyOn(component, 'search')
    fixture.debugElement.nativeElement.querySelector('#searchInput').value = 'luiscruzga';
    fixture.debugElement.nativeElement.querySelector('#searchBtn').click();
    fixture.whenStable().then(() => {
      expect(component.search).toHaveBeenCalled();
    });
  });
  it('should navigate to /user/:username/repos on search button click', async() => {
    const spy = spyOn(router, 'navigateByUrl');
    fixture.debugElement.nativeElement.querySelector('#searchInput').value = 'luiscruzga';
    fixture.debugElement.nativeElement.querySelector('#searchBtn').click();
    fixture.whenStable().then(() => {
      const url = spy.calls.first().args[0];
      expect(url).toBe('/user/luiscruzga/repos');
    });
  });
});
