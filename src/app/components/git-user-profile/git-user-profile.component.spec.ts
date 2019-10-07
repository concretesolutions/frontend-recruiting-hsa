import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserProfileComponent } from './git-user-profile.component';

describe('GitUserProfileComponent', () => {
  let component: GitUserProfileComponent;
  let fixture: ComponentFixture<GitUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
