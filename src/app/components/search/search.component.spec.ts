import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { GetUserDataService } from 'src/app/services/get-user-data.service';
import {Router} from '@angular/router';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule ],
      providers: [ {provide: GetUserDataService}, {provide: Router} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
