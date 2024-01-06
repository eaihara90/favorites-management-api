import { Request, Response } from "express";

export interface IMoviesController {
  getAll(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<void>;
  save(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
}