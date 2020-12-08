import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GitHubServiceService } from 'src/app/service/git-hub-service.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
	pictureUser = '';
	users = '';
	nameUser = '';
	userLogin = '';
	userOrganization = '';
	userLocation = '';
	userPublicRepos = '';
	userFollowers = '';
	userStar = '';
	repositories: {
		name: any;
		description: any;
		stargazers_count: any;
		html_url: any;
	}[] = [];
	username: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private services: GitHubServiceService
	) {}

	ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
			this.username = params.get('usuario');
			this.getRepos();
			this.getUser();
		});
	}

	// funciones para obtener los datos de los repositorios

	getRepos() {
		this.services.getRepos(this.username).subscribe((repos) => {
			this.repositories = this.createObject(repos).sort((a, b) => {
				return b.stargazers_count - a.stargazers_count;
			});
		});
	}

	getUser() {
		this.services.getUsers(this.username).subscribe(
			(users: any) => {
				this.pictureUser = users['avatar_url'];
				this.nameUser = users['name'];
				this.userLogin = users['login'];
				this.userOrganization = users['company'] || 'Sin Compañía';
				this.userLocation = users['location'] || 'Sin Ubicación';
				this.userPublicRepos = users['public_repos'];
				this.userFollowers = users['followers'];
				this.userStar = users['star'] || 0;
			},
			(err) => {
				this.router.navigate(['not-found']);
			}
		);
	}

	createObject(
		repositories: {
			name: any;
			description: any;
			stargazers_count: any;
			html_url: any;
		}[]
	) {
		let repos: {
			name: any;
			description: any;
			stargazers_count: any;
			html_url: any;
		}[] = [];
		repositories.forEach((repo) => {
			let repoUser = {
				name: repo.name,
				description: repo.description,
				stargazers_count: repo.stargazers_count,
				html_url: repo.html_url,
			};
			repos.push(repoUser);
		});
		return repos;
	}
}
