export interface IGuide {
  id: number;
  title: string;
  description: string;
  resource: {
    title: string;
  }
}

export class Guide {
  id: 0;
  title: "";
  description: "";
  resource: {
    title: "",
  }
}

const GUIDES: Array<IGuide> = [
  {
    id: 1,
    title: "First",
    description: "The First Description EVER!",
    resource: {
      title: "Book One"
    }
  },
  {
    id: 2,
    title: "Second",
    description: "The Second Description EVER!",
    resource: {
      title: "Book Two"
    }
  },
  {
    id: 3,
    title: "Third",
    description: "The Third Description EVER!",
    resource: {
      title: ""
    }
  },
];

export default GUIDES;
