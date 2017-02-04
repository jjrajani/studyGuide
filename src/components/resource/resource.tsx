import { IChapter, Chapter } from "../chapter/chapter";

export interface IResource {
  id: number;
  title: string;
  description: string;
  chapters: Array<IChapter>;
}

export class Resource {
  id = 0;
  title = "";
  description = "";
  chapters = new Array<Chapter>();
}
