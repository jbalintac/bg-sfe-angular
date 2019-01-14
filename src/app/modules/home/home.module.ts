// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MovieComponent } from './pages/movie/movie.component';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: [MovieComponent]
// })
// export class MovieModule { }


import { NgModule } from '@angular/core';

// import { MyModalComponent } from './modals/my-modal.component';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@app/shared';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

import { MovieService } from '@app/core';
import { MovieResolver } from './movie-resolver.service';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        HomeComponent,
        MovieListComponent,
        MovieDetailComponent
    ],
    imports: [
        SharedModule,

        HomeRoutingModule,

        HttpModule // TODO: no providerIn
    ],
    exports: [],
    providers: [],  // TODO: no providerIn
})
export class HomeModule {}
