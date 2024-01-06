import { Request, Response } from 'express';
import { route, GET, POST, DELETE, PUT } from 'awilix-express';

import { MovieAbstractModel, MovieModel } from './models/movie.model';
import { IMoviesController } from './interfaces/IMovies.controller';
import { IMoviesService } from './interfaces/IMovies.service';

@route('/movies')
export default class MoviesController implements IMoviesController {
  constructor(private moviesService: IMoviesService<MovieAbstractModel>) { }
  
  @route('')
  @GET()
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const movies = await this.moviesService.findAll();
      res.status(200).json({ movies });
    } catch (error) {
      res.status(500).send('Internal server error');
    }
  }

  @route('/:id')
  @GET()
  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const movie = await this.moviesService.findById(req.params.id);
      res.status(200).json({ movie });
    } catch (error: any) {
      if (error.status && error.message) {
        res.status(error.status).send(error.message);
        return;
      }

      res.status(500).send(error);
    }
  }

  @route('')
  @POST()
  public async save(req: Request, res: Response): Promise<void> {
    try {
      const movie = await this.moviesService.save(req.body);
      res.status(200).json({ movie });
    } catch (error) {
      res.status(500).send('Internal server error');
    }
  }

  @route('/:id')
  @DELETE()
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const deleted = await this.moviesService.delete(req.params.id);
      res.status(200).json({ deleted });
    } catch (error) {
      res.status(500).send('Internal server error');
    }
  }

  @route('')
  @PUT()
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const movie = await this.moviesService.update(req.body);
      res.status(200).json({ movie });
    } catch (error) {
      res.status(500).send('Internal server error');
    }
  }
} 