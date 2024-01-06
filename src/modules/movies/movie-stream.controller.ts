import fs from 'node:fs';

import { route, GET } from 'awilix-express';
import { Request, Response } from 'express';

import { MovieModel } from '@/modules/movies/models/movie.model';
import { IMoviesService } from './interfaces/IMovies.service';


@route('/movie-stream')
export default class MovieStreamController {
  constructor(private moviesService: IMoviesService<MovieModel>) { }

  @route('/:id')
  @GET()
  public async stream(req: Request, res: Response): Promise<void> {
    try {
      const storageUrl: string = await this.moviesService.getStorageUrl(req.params.id);
      
      const range = req.headers.range;
      if (!range) {
        res.status(400).send("Requires Range header");
        return;
      }

      const { moviePath, movieSize } = this.getMovieSize(storageUrl);
      const { start, end } = this.getStartAndEndTime(range!, movieSize);
      const movieStream = fs.createReadStream(moviePath, { start, end });

      res.writeHead(206, this.createHeaders(start, end, movieSize));
      movieStream.pipe(res);

    } catch (error) {
      res.status(500).send('Internal server error');
    }
  }

  private getMovieSize(storageUrl: string): { moviePath: string, movieSize: number } {
    const moviePath: string = storageUrl;
    const movieSize: number = fs.statSync(moviePath).size;
    return { moviePath, movieSize };
  }

  private getStartAndEndTime(_range: string, _videoSize: number): { start: number, end: number } {
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(_range!.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, _videoSize - 1);
    return { start, end };
  }

  private createHeaders(_start: number, _end: number, _videoSize: number): {} {
    const contentLength = _end - _start + 1;

    const headers = {
      "Content-Range": `bytes ${_start}-${_end}/${_videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
    
    return headers;
  }
}