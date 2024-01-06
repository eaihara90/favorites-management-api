import { Types } from 'mongoose';

import { MovieAbstractModel, MovieModel } from "./models/movie.model";
import { MovieInputDTO, MovieOutputDTO } from "./dto/movie.dto";
import { ErrorMessage } from "@/middlewares/error-message";
import { IMoviesRepository } from "./interfaces/IMovies.repository";
import { IMoviesService } from "./interfaces/IMovies.service";

export default class MoviesService implements IMoviesService<MovieAbstractModel | MovieModel> {
  constructor(private moviesRepository: IMoviesRepository<MovieAbstractModel | MovieModel>) { }

  public async findAll(): Promise<MovieOutputDTO[]> {
    try {
      const response = await this.moviesRepository.findAll();
      // const movies = response.map(x => MovieOutputDTO.toMovieOutputDTO(x));
      const movies = response.map(x => MovieModel.toMovieModel(x));
      return movies;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async findById(id: string): Promise<MovieOutputDTO> {
    try {
      const response = await this.moviesRepository.findById(id);
      
      if (!response) {
        throw new ErrorMessage('Movie not found', 404);
      }

      // const movie = MovieOutputDTO.toMovieOutputDTO(response);
      const movie = MovieModel.toMovieModel(response);
      return movie;
    } catch (error) {
      throw error;
    }
  }

  public async save(model: MovieInputDTO): Promise<MovieOutputDTO> {
    try {
      const response = await this.moviesRepository.save(model);
      
      if (!response) {
        throw new Error('Movie not found');
      }

      // const movie = MovieOutputDTO.toMovieOutputDTO(response);
      const movie = MovieModel.toMovieModel(response);
      return movie;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      const response = await this.moviesRepository.delete(id);
      
      if (response.deletedCount <= 0) {
        throw new Error('Movie not found');
      }
      
      return true;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async update(model: MovieModel): Promise<MovieOutputDTO> {
    try {
      model._id = new Types.ObjectId(model.id);
      const response = await this.moviesRepository.update(model);

      if (!response) {
        throw new Error('Movie not found');
      }

      // const movie = MovieOutputDTO.toMovieOutputDTO(response);
      const movie = MovieModel.toMovieModel(response);
      return movie;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async getStorageUrl(_id: string): Promise<string> {
    try {
      const response = await this.moviesRepository.getStorageUrl(_id);
      
      if (!response) {
        throw new ErrorMessage('Movie not found', 404);
      }

      const { storageUrl } = MovieModel.toMovieModel(response);
      
      return storageUrl;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}