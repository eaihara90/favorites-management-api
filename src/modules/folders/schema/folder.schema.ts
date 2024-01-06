import { model, Schema, Types } from 'mongoose';

import { FolderModel } from '../models/folder.model';

const folderInfoSchema = new Schema<FolderModel>({
  title: {
    type: String,
    required: true
  },
  parentId: {
    type: Types.ObjectId,
    required: false,
    default: undefined
  }
},
{
  versionKey: false
});

const folderMongoSchema = new Schema<FolderModel>({
  files: { 
    type: [Types.ObjectId],
    required: false,
    default: undefined
  },
  folders: {
    type: [folderInfoSchema],
    required: false,
    default: undefined
  },
  title: {
    type: String,
    required: true
  },
  parentId: {
    type: Types.ObjectId,
    required: false,
    default: undefined
  },
  path: {
    type: String,
    required: false,
    default: undefined
  },
},
{
  versionKey: false
});

export const FolderSchema = model<FolderModel>('Folder', folderMongoSchema);
