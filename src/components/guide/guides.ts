import { IResource, Resource } from "../resource/resource";

export interface IGuide {
  id: number;
  title: string;
  description: string;
  resource: IResource;
}

export class Guide {
  id = 0;
  title = "";
  description = "";
  resource = new Resource();
}

const GUIDES: Array<IGuide> = [
  {
    id: 1,
    title: "First",
    description: "The First Description EVER!",
    resource: {
      id: 1,
      title: "Book One",
      description: "the first books desription",
      chapters: [
        {
          id: 1,
          number: 1,
          title: "First chapter",
          description: "the first chapter"
        },
        {
          id: 2,
          number: 4,
          title: "Fourth chapter",
          description: "the fourth chapter"
        },
      ]
    }
  },
  {
    id: 2,
    title: "Second",
    description: "The Second Description EVER!",
    resource: {
      id: 1,
      title: "Book Two",
      description: "the second books desription",
      chapters: []
    }
  },
  {
    id: 3,
    title: "Third",
    description: "The Third Description EVER!",
    resource: {
      id: 1,
      title: "",
      description: "the third books desription",
      chapters: [
        {
          id: 1,
          number: 1,
          title: "First chapter",
          description: "the first chapter"
        },
      ]
    }
  },
];

export default GUIDES;
