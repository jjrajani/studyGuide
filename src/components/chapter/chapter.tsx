// import { IChapter, Chapter } from "../chapter/chapter";

export interface IChapter {
  id: number;
  number: number;
  title: string;
  description: string;
}

export class Chapter {
  id = 0;
  number: 0;
  title = "";
  description = "";
}
