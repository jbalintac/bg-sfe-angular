import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

import { itemTransition } from './home.animation';

import { store, filterMovies, storeMovies } from '@app/core';

import { SearchQuery } from "@app/core";
import { MovieService, Movie, GenreType } from '@app/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ itemTransition ]
})
export class HomeComponent implements OnInit {

  searchField = new FormControl();
  genreField = new FormControl();

  movies: Movie[];
  genreTypes: string[];

  constructor(
    private movieService: MovieService) { }

  ngOnInit() {

    this.initRedux();

    this.loadMovies();
    this.subscribeToForms();

    this.genreTypes = this.ToArray(GenreType);
    this.genreTypes.unshift('');
  }

  initRedux() {
    store.subscribe(() => {
      this.updateFromState();
    });
  }

  subscribeToForms() {

    // Term
    this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).
    subscribe(term => {
      store.dispatch(filterMovies(new SearchQuery(term, this.genreField.value)));
    });

    // Genre
    this.genreField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).
    subscribe(genreType => {
       store.dispatch(filterMovies(new SearchQuery(this.searchField.value, genreType)));
    });
  }

  loadMovies() {
    this.movieService.getAll().subscribe(m => store.dispatch(storeMovies(m)));
  }

  updateFromState() {
    const allState = store.getState();
    this.movies = allState.filteredMovies;
  }

  // Helper
  ToArray(enumme) {
    return Object.keys(enumme)
        .map(key => enumme[key]);
  }
}
