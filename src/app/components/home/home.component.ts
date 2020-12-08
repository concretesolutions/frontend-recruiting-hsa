import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	constructor(public service: GitHubService, private router: Router) {}
	ngOnInit(): void {}
	onSubmit(search: string) {
		this.router.navigate(['details/' + search]);
	}
}
