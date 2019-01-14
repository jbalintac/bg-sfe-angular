import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';

import { Movie } from '../models/movie.model';
import { SearchQuery } from '../models/search-query.model';

@Injectable({ providedIn: 'root'})
export class MovieService {

  private _movieUrl = '../assets/movie.mock-data.json';

  constructor(private _http: Http) {}


    getAll(): Observable<Movie[]> {
        return this._http.get(this._movieUrl).pipe(map((response) =>
            <Movie[]>response.json()));
    }

    getSingle(id: number): Observable<Movie> {
        return this._http.get(this._movieUrl).pipe(map((response) =>
        <Movie>response.json().filter(m => m.id == id)[0]));
    }

    search(query: SearchQuery): Observable<Movie[]> {
        return this._http.get(this._movieUrl).pipe(map((response) =>
            <Movie[]>response.json().filter(m => {

                return  (query.genreType == null ||
                 query.genreType.toString() === '' ||
                 m.genres.includes(query.genreType)) && (
                    query.term == null ||
                    m.name.toUpperCase().includes(query.term.toUpperCase())
                    || m.description.toUpperCase().includes(query.term.toUpperCase()));
            })));
    }
}
