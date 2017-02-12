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
          pageNumber: 12,
          title: "First chapter",
          description: "the first chapter",
          sections: [
            {
              id: 1,
              pageNumber: 12,
              title: "first section",
              description: "first section descr",
              notes: [
                {
                  id: 1,
                  pageNumber: 12,
                  text:"The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever! The first note ever!",
                },
                {
                  id: 2,
                  pageNumber: 12,
                  text:"The second note ever!",
                },
                {
                  id: 3,
                  pageNumber: 13,
                  text:"The third note ever!",
                },
                {
                  id: 4,
                  pageNumber: 13,
                  text:"The fourth note ever!",
                },
                {
                  id: 5,
                  pageNumber: 14,
                  text:"The fifth note ever!",
                },
                {
                  id: 6,
                  pageNumber: 15,
                  text:"The sixth note ever!",
                },
                {
                  id: 7,
                  pageNumber: 15,
                  text:"The seventh note ever!",
                },
              ],
            },
            {
              id: 2,
              pageNumber: 18,
              title: "second section",
              description: "second section descr",
              notes: [
                {
                  id: 1,
                  pageNumber: 12,
                  text:"The first note ever!",
                },
                {
                  id: 2,
                  pageNumber: 12,
                  text:"The second note ever!",
                },
                {
                  id: 3,
                  pageNumber: 13,
                  text:"The third note ever!",
                },
              ],
            },
            {
              id: 3,
              pageNumber: 123,
              title: "third section",
              description: "third section descr",
              notes: [
                {
                  id: 1,
                  pageNumber: 12,
                  text:"The first note ever!",
                },
                {
                  id: 2,
                  pageNumber: 12,
                  text:"The second note ever!",
                },
                {
                  id: 3,
                  pageNumber: 13,
                  text:"The third note ever!",
                },
              ],
            },
            {
              id: 4,
              pageNumber: 345,
              title: "fourth section",
              description: "fourth section descr",
              notes: [
                {
                  id: 1,
                  pageNumber: 12,
                  text:"The first note ever!",
                },
                {
                  id: 2,
                  pageNumber: 12,
                  text:"The second note ever!",
                },
                {
                  id: 3,
                  pageNumber: 13,
                  text:"The third note ever!",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          number: 4,
          pageNumber: 58,
          title: "Fourth chapter",
          description: "the fourth chapter",
          sections: [],
        },
        {
          id: 3,
          number: 6,
          pageNumber: 72,
          title: "Sixth Chapter",
          description: "The sixth Chapter",
          sections: [],
        },
        {
          id: 4,
          number: 7,
          pageNumber: 89,
          title: "Crop List with Toggle Extenstion",
          description: "Add functionality for displaying first three chapters with a toggle option to show more chapters.",
          sections: [],
        },
        {
          id: 3,
          number: 9,
          pageNumber: 102,
          title: "Ninth Chapter",
          description: "The ninth Chapter",
          sections: [],
        },
        {
          id: 3,
          number: 10,
          pageNumber: 121,
          title: "Tenth Chapter",
          description: "The tenth Chapter",
          sections: [],
        },
        {
          id: 5,
          number: 12,
          pageNumber: 135,
          title: "Hows we do",
          description: "Toggle implementation calibration",
          sections: [],
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
      chapters: [],
    }
  },
  {
    id: 3,
    title: "Third",
    description: "The Third Description EVER!",
    resource: {
      id: 1,
      title: "",
      description: "",
      chapters: [
        {
          id: 0,
          number: 0,
          pageNumber: 0,
          title: "",
          description: "",
          sections: [],
        },
      ]
    }
  },
];

export default GUIDES;
