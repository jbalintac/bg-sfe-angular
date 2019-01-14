// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-movie-detail',
//   templateUrl: './movie-detail.component.html',
//   styleUrls: ['./movie-detail.component.scss']
// })
// export class MovieDetailComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '@app/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movie$ = this.route.data.pipe(map((data) => data.movie));
  }

}
