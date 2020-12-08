import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from 'src/app/service/git-hub-service.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
	constructor(
		private services: GitHubServiceService,
		private router: Router
	) {}

	ngOnInit(): void {}

	get(username: string) {
		this.router.navigate([`details/${username}`]);
	}
}
