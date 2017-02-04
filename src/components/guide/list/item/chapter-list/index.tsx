import * as React from "react";
import "./style.scss";
import { IChapter } from "../../../../chapter/chapter";

export interface ChapterListProps {
  chapters: Array<IChapter>;
}

export interface ChapterListState {

}

export default class ChapterList extends React.Component<ChapterListProps, ChapterListState> {

  constructor(props: ChapterListProps) {
    super(props);
  }

  render() {
    return (
      <div className="chapter-list">
        {
          this.props.chapters.map( (chapter, i) => {
            if (i === 0) {
              return (
                <div key={i} className="first-chapter">
                <p className="add-chapter">Add Chapter</p>
                  <div className="header">
                    <p className="title">{chapter.title}</p>
                    <p className="chapter-number">Chapter - - - - {chapter.number}</p>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={i} className="chapter">
                    <p className="title">{chapter.title}</p>
                    <p className="chapter-number">Chapter - - - - {chapter.number}</p>
                </div>
              );
            }
          })
         }
      </div>
    )
  }

}
