import { createContainer, InjectionMode, asClass, asValue } from 'awilix';

import dbConnection from '@/db/db-connection';
import MovieStreamController from '@/modules/movies/movie-stream.controller';
import MoviesController from '@/modules/movies/movies.controller';
import MoviesService from '@/modules/movies/movies.service';
import MoviesRepository from '@/modules/movies/movies.repository';

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})
.register({
  moviesController: asClass(MoviesController),
  moviesService: asClass(MoviesService),
  moviesRepository: asClass(MoviesRepository),
  movieStreamController: asClass(MovieStreamController),
  db: asValue(dbConnection)
});
