import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { concatMap, tap, map, catchError } from 'rxjs/operators';

import { RepositoriesService } from './repositories.service';
import { GithubUserDetails, UserProfile } from './repositories.model';

@Injectable()
export class RepositoriesResolver implements Resolve<GithubUserDetails> {

  constructor(
    private repositories: RepositoriesService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const { username } = route.params;
    let userProfile: UserProfile;

    return this.repositories.getUserProfile(username).pipe(
      tap(profile => userProfile = profile),
      concatMap(profile => this.repositories.getUserRepositories(username)),
      map(repos => ({
        profile: userProfile,
        repositories: repos
      })),
      catchError(() => {
        this.router.navigate(['/not-found']);

        return of(null);
      })
    );
  }
}
