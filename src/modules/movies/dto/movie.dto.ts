import { Document } from 'mongoose';

import { MovieAbstractModel, MovieModel } from '../models/movie.model';

export class MovieInputDTO extends MovieAbstractModel {
  constructor() {
    super();
  }

  // public static toMovieInputDTO(movie: MovieModel): MovieInputDTO {
  //   const movieInputDTO = new MovieInputDTO();

  //   for (let prop in movie) {
  //     if (prop === '_id') {
  //       movie
  //     }
  //   }
  // }
}

export class MovieOutputDTO extends MovieAbstractModel {
  public id!: string;
  constructor() {
    super();
  }

  public static toMovieOutputDTO(_doc: Document<unknown, {}, MovieAbstractModel>): MovieOutputDTO {
    const movie: MovieModel = _doc.toJSON();
    const movieOutputDTO = new MovieOutputDTO();

    movieOutputDTO.id = _doc.toObject()._id.toString();
    movieOutputDTO.categories = movie.categories;
    movieOutputDTO.coverUrl = movie.coverUrl;
    movieOutputDTO.date = movie.date;
    movieOutputDTO.description = movie.description;
    movieOutputDTO.duration = movie.duration;
    movieOutputDTO.title = movie.title;

    return movieOutputDTO;
  }
}