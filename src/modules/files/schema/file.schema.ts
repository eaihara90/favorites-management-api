import { model, Schema, Types } from 'mongoose';

import { FileModel } from '../models/file.model';


const fileMongoSchema = new Schema<FileModel>({
  description: { type: String, required: false },
  imgSrc: { type: String, required: false },
  parentId: { type: Types.ObjectId, required: true },
  title: { type: String, required: true },
  url: { type: String, required: false },
},
{
  versionKey: false
});

export const FileSchema = model<FileModel>('File', fileMongoSchema);
