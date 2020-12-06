import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import {Params, ActivatedRoute} from '@angular/router';
import { of } from 'rxjs';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [ 
        HttpClient,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              username: 'luiscruzga',
            }),
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display user info', async() => {
    fixture.detectChanges();
    const pLogin = fixture.debugElement.nativeElement.querySelector('#userLogin');
    fixture.whenStable().then(() => {
      expect(pLogin.innerHTML).toContain('luiscruzga');
    });
  });
  
  it('should display user repos', async() => {
    fixture.detectChanges();
    const repos = fixture.debugElement.nativeElement.querySelectorAll('.repo-name');
    fixture.whenStable().then(() => {
      expect((repos.length)).toBeGreaterThan(0);
    });
  });
});
