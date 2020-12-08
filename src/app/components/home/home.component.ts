import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from 'src/app/service/git-hub-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	constructor(
		private services: GitHubServiceService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {}
	get(username: string) {
		this.router.navigate([`details/${username}`]);
	}
}
