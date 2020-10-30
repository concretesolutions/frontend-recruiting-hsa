import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  const routerSpy = { navigate: jasmine.createSpy('navigate') };
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [RouterTestingModule, FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleEnter on Keypress', () => {
    const eventMock: KeyboardEvent = new KeyboardEvent('Enter');
    component.searchValue = 'userSample';
    component.handleEnter(eventMock);
    expect(component.validateRoute(component.searchValue)).toEqual(
      '/search/user/usersample'
    );
  });

  it('should navigate on Keypress if enter is pressed', inject(
    [Router],
    (router: Router) => {
      component.searchValue = 'tefap1993';
      const eventMock: KeyboardEvent = new KeyboardEvent('keydown', {
        code: 'Enter',
        key: 'Enter',
        view: window
      });
      component.handleEnter(eventMock);
      spyOn(router, 'navigate').and.stub();
    }
  ));

  it('should do nothing on Keypress Enter if route is invalid', () => {
    const eventMock: KeyboardEvent = new KeyboardEvent('keydown', {
      code: 'Enter',
      key: 'Enter',
      view: window
    });
    component.searchValue = '';
    component.handleEnter(eventMock);
    expect(component.validateRoute('')).toEqual('');
  });

  it('should return valid route', () => {
    const url = component.validateRoute('sample');
    expect(url).toEqual(`/search/user/sample`);
  });

  it('should return empty if route is invalid', () => {
    expect(component.validateRoute('')).toEqual('');
  });
});
