import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieResolver } from './movie-resolver.service';
import { HomeComponent } from './pages/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: HomeComponent, data: { state: 'home'}
        },
        {
          path: 'movie/:id',
          component: MovieDetailComponent,
          resolve: {
            movie: MovieResolver
          }, data: { state: 'movie'}
        }
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
