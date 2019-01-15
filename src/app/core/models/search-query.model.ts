import { GenreType } from './movie.model';

export class SearchQuery {

    constructor(term: string, genreType: GenreType) {
        this.term = term;
        this.genreType = genreType;
    }

    term: string;
    genreType: GenreType;
}
