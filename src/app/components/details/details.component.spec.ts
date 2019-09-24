import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { GetUserDataService } from 'src/app/services/get-user-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ HttpClientModule ],
      providers: [ GetUserDataService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
