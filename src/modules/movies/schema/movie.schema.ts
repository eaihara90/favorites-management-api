import { model, Schema } from 'mongoose';

import { MovieModel } from '../models/movie.model';

const movieMongoSchema = new Schema<MovieModel>({
  categories: [String],
  coverUrl: String,
  duration: Number,
  date: String,
  description: String,
  storageUrl: String,
  title: String,
},
{
  versionKey: false
});

export const MovieSchema = model<MovieModel>('Movie', movieMongoSchema);
