import { Document, Types } from "mongoose";

export abstract class MovieAbstractModel {
  [key: string]: any;
  public categories!: string[];
  public coverUrl!: string;
  public date!: Date;
  public description!: string;
  public duration!: number;
  public title!: string;
}

export class MovieModel extends MovieAbstractModel {
  public _id!: Types.ObjectId;
  public id!: string;
  public storageUrl!: string;
  constructor() {
    super();
  }

  public static toMovieModel(_doc: Document<unknown, {}, MovieAbstractModel>): MovieModel {
    const movie: MovieModel = _doc.toJSON();
    const movieModel = new MovieModel();
    
    movieModel.id = _doc.toObject()._id.toString();
    movieModel.categories = movie.categories;
    movieModel.coverUrl = movie.coverUrl;
    movieModel.date = movie.date;
    movieModel.description = movie.description;
    movieModel.duration = movie.duration;
    movieModel.storageUrl = movie.storageUrl;
    movieModel.title = movie.title;

    return movieModel;
  }
}