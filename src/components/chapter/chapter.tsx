import { ISection } from "../section/section";

export interface IChapter {
  id: number;
  number: number;
  pageNumber: number;
  title: string;
  description: string;
  sections: Array<ISection>;
}

export class Chapter {
  id = 0;
  number: 0;
  pageNumber: 0;
  title = "";
  description = "";
  sections = new Array<ISection>();
}
