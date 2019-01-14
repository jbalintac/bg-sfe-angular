import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MovieService, Movie } from '@app/core';

@Injectable({providedIn: 'root'})
export class MovieResolver implements Resolve<Movie> {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

  return this.movieService.getSingle(route.params['id'])
            .pipe(catchError((err) =>   this.router.navigateByUrl('/')));
  }
}
