import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSharedComponent } from './search-shared.component';

describe('SearchSharedComponent', () => {
  let component: SearchSharedComponent;
  let fixture: ComponentFixture<SearchSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
