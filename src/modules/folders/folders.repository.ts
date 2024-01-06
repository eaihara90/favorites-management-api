import { Document } from 'mongoose';
import { FolderSchema } from './schema/folder.schema';
import { FolderModel } from './models/folder.model';

export default class FoldersRepository {
  public async findAll(): Promise<(Document<unknown, {}, FolderModel>)[]> {
    try {
      return FolderSchema.find().exec();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async findById(id: string): Promise<(Document<unknown, {}, FolderModel>) | null> {
    try {
      return FolderSchema.findOne({ _id: id }).exec();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async save(movie: any): Promise<(Document<unknown, {}, FolderModel>)> {
    try {
      return FolderSchema.create(movie);
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async delete(id: string): Promise<any> {
    try {
      return FolderSchema.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async update(movie: any): Promise<(Document<unknown, {}, FolderModel>) | null> {
    try {
      return FolderSchema.findByIdAndUpdate(movie._id, movie, { new: true }).exec();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}