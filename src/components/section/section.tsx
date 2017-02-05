import { INote } from "../note/note";

export interface ISection {
  id: number;
  pageNumber: number;
  title: string;
  description: string;
  notes: Array<INote>;
}

export class Section {
  id: 0;
  pageNumber: 0;
  title: "";
  description: "";
  notes: Array<INote>;
}
