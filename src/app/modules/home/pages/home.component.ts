import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MovieService, Movie, GenreType } from '@app/core';
import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

import { itemTransition } from './home.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ itemTransition ]
})
export class HomeComponent implements OnInit {

  searchField = new FormControl();
  genreField = new FormControl();


  movies$: Observable<Movie[]>;

  genreTypes: string[];

  constructor(
    private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies();

    this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).
    subscribe(term => { this.movies$ = this.movieService.search({term: term, genreType: this.genreField.value}); });

    this.genreField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).
    subscribe(genreType => { this.movies$ = this.movieService.search({term: this.searchField.value, genreType: genreType}); });

    this.genreTypes = this.ToArray(GenreType);
    this.genreTypes.unshift('');
    console.log(this.ToArray(GenreType));
  }

  loadMovies() {
    this.movies$ = this.movieService.getAll();
  }

  // Helper
  ToArray(enumme) {
    return Object.keys(enumme)
        .map(key => enumme[key]);
  }
}
