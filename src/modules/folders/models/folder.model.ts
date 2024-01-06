import { FileModel } from "../../files/models/file.model";

export class FolderModel {
  _id?: any;
  files?: string[];
  folders?: FolderModel[];
  title?: string;
  parentId?: string;
  path?: string;
}