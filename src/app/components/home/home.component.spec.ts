import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { throwError } from 'rxjs';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('When onSubmit() is called', () => {
		it('should handle error'),
			() => {
				spyOn(component.service, 'getData').and.returnValue(
					throwError({ error: 'error' })
				);
				expect(component.error).toBeTruthy();
				component.onSubmit('');
			};
	});
});
