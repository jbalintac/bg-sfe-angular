import { Movie } from '../models/movie.model';
import { IAppState } from './IAppState';
import { FILTER_MOVIES, REQUEST_MOVIES_SUCCESS } from './movie.action';

const movies = [];

const initialState: IAppState = {
    movies,
    filteredMovies: movies
};

function filterMovies(state, action): IAppState {
  return Object.assign({}, state, {
    filteredMovies: state.movies.filter(c => {

      return (action.searchQuery.term == null ||
              c.name.toUpperCase().includes(action.searchQuery.term.toUpperCase()) ||
              c.description.toUpperCase().includes(action.searchQuery.term.toUpperCase()))

              && (action.searchQuery.genreType == null ||
              action.searchQuery.genreType.toString() === '' ||
              c.genres.includes(action.searchQuery.genreType)) ;
    }),
  });
}

function storeMovies(state, action): IAppState {
  return Object.assign({}, state, {
    movies: action.movies,
    filteredMovies: action.movies,
  });
}

export function reducer(state= initialState, action) {
    switch (action.type) {
      case FILTER_MOVIES:
        return filterMovies(state, action);
      case REQUEST_MOVIES_SUCCESS:
        return storeMovies(state, action);
      default:
        return state;
    }
}
