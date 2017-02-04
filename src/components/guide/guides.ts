export interface IGuide {
  id: number;
  title: string;
  description: string;
  resource: {
    title: string;
    description: string;
  }
}

export class Guide {
  id: 0;
  title: "";
  description: "";
  resource: {
    title: "",
    description: "",
  }
}

const GUIDES: Array<IGuide> = [
  {
    id: 1,
    title: "First",
    description: "The First Description EVER!",
    resource: {
      title: "Book One",
      description: "the first books desription"
    }
  },
  {
    id: 2,
    title: "Second",
    description: "The Second Description EVER!",
    resource: {
      title: "Book Two",
      description: "the second books desription"
    }
  },
  {
    id: 3,
    title: "Third",
    description: "The Third Description EVER!",
    resource: {
      title: "",
      description: "the third books desription"
    }
  },
];

export default GUIDES;
