export interface IMoviesService<T> {
  findAll(): Promise<Array<T>>;
  findById(id: string): Promise<T>;
  save(model: T): Promise<T>;
  delete(id: string): Promise<boolean>;
  update(model: T): Promise<T>;
  getStorageUrl(id: string): Promise<string>;
}