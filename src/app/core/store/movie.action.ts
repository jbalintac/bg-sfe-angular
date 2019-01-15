import { Movie } from '@app/core';
import { SearchQuery } from "@app/core";
export const FILTER_MOVIES = 'movie/FILTER';
export const REQUEST_MOVIES_SUCCESS = 'movie/REQUEST_MOVIE_SUCCESS';


export function filterMovies(searchQuery: SearchQuery) {
    return {
        type: FILTER_MOVIES,
        searchQuery
    };
}

export function storeMovies(movies: Movie[]) {
    return {
        type: REQUEST_MOVIES_SUCCESS,
        movies
    };
}
