import { Document } from 'mongoose';

export interface IMoviesRepository<T> {
  findAll(): Promise<(Document<unknown, {}, T>)[]>;
  findById(id: string): Promise<(Document<unknown, {}, T>) | null>;
  save(model: T): Promise<Document<unknown, {}, T>>;
  delete(id: string): Promise<{ acknowledged: boolean, deletedCount: number }>;
  update(model: T): Promise<(Document<unknown, {}, T>) | null>;
  getStorageUrl(id: string): Promise<(Document<unknown, {}, T>) | null>;
}