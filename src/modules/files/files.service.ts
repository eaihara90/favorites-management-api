import { Types } from "mongoose";
import { ErrorMessage } from "@/middlewares/error-message";
import FilesRepository from "./files.repository";

export default class FilesService {
  constructor(private filesRepository: FilesRepository) { }
  
  public async findAll(): Promise<any[]> {
    try {
      const response = await this.filesRepository.findAll();
      // const movies = response.map(x => MovieOutputDTO.toMovieOutputDTO(x));
      // const movies = response.map(x => MovieModel.toMovieModel(x));
      return response;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async findById(id: string): Promise<any> {
    try {
      const response = await this.filesRepository.findById(id);
      
      if (!response) {
        throw new ErrorMessage('Movie not found', 404);
      }

      // const movie = MovieOutputDTO.toMovieOutputDTO(response);
      // const movie = MovieModel.toMovieModel(response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async save(model: any): Promise<any> {
    try {
      const response = await this.filesRepository.save(model);
      
      if (!response) {
        throw new Error('Movie not found');
      }

      // const movie = MovieOutputDTO.toMovieOutputDTO(response);
      // const movie = MovieModel.toMovieModel(response);
      return response;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      const response = await this.filesRepository.delete(id);
      
      if (response.deletedCount <= 0) {
        throw new Error('Movie not found');
      }
      
      return true;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async update(model: any): Promise<any> {
    try {
      model._id = new Types.ObjectId(model.id);
      const response = await this.filesRepository.update(model);

      if (!response) {
        throw new Error('Movie not found');
      }

      // const movie = MovieOutputDTO.toMovieOutputDTO(response);
      // const movie = MovieModel.toMovieModel(response);
      return response;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}