import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
	avatar: string = '';
	link_user: string = '';
	name: string = '';
	login: string = '';
	company: string = '';
	location: string = '';
	star: string = '';
	public_repos: string = '';
	followers: string = '';
	username = '';
	repositoriesList: {
		name: any;
		description: any;
		star: any;
		html_url: any;
	}[] = [];

	constructor(
		private service: GitHubService,
		private router: Router,
		private actRouter: ActivatedRoute
	) {}
	ngOnInit(): void {
		this.actRouter.paramMap.subscribe((params: ParamMap) => {
			this.username = params.get('username') || '';
			this.getUser();
			this.getRepos();
		});
	}
	getUser() {
		this.service.getData(this.username, '').subscribe(
			(user) => {
				this.avatar = user['avatar_url'];
				this.link_user = user['html_url'];
				this.name = user['name'];
				this.login = user['login'];
				this.company = user['company'];
				this.location = user['location'];
				this.star = user['star'] || 0;
				this.public_repos = user['public_repos'] || 0;
				this.followers = user['followers'] || 0;
			},
			(error) => {
				this.router.navigate(['notFound']);
			}
		);
	}
	getRepos() {
		this.service.getData(this.username, '/repos').subscribe(
			(repos) => {
				this.repositoriesList = this.createObjectRepo(repos).sort(
					(a, b) => {
						return b.star - a.star;
					}
				);
			},
			(error) => {
				console.error(error);
			}
		);
	}

	createObjectRepo(
		repository: {
			name: any;
			description: any;
			stargazers_count: any;
			html_url: any;
		}[]
	) {
		let repositories: {
			name: any;
			description: any;
			star: any;
			html_url: any;
		}[] = [];
		repository.forEach(
			(repo: {
				name: any;
				description: any;
				stargazers_count: any;
				html_url: any;
			}) => {
				let repositorieObject = {
					name: repo.name,
					description: repo.description,
					star: repo.stargazers_count,
					html_url: repo.html_url,
				};
				repositories.push(repositorieObject);
			}
		);
		return repositories;
	}
}
