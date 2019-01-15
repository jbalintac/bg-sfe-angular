import { Movie } from '../models/movie.model';

export interface IAppState {
    movies: Movie[];
    filteredMovies: Movie[];
}
