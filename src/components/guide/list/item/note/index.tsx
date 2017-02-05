import * as React from "react";
// import "./style.scss";
import { INote } from "../../../../note/note";
import { Link } from "react-router";

export interface NoteProps {
  guideId: number;
  chapterId: number;
  sectionId: number;
  note: INote;
}

export interface NoteState {

}

export default class Note extends React.Component<NoteProps, NoteState> {

  constructor (props: NoteProps) {
    super(props);

  }

  render() {
    let note = this.props.note;
    return (
      <div className="note item">
        <div className="note header">
          <div className="note sub-header">
            <Link
              className="link page-number"
              to={`/guide/${this.props.guideId}/resource/chapter/${this.props.chapterId}/section${this.props.sectionId}/note/${note.id}`}
            >pg.{note.pageNumber}
            </Link>
            {this.edit()}
          </div>
        </div>
        <p className="text">
          {note.text}
        </p>
      </div>
    );
  }

  private edit = () => {
    return (
      <Link
        className="link edit"
        to={`/guide/${this.props.guideId}/resource/section/${this.props.sectionId}/note/${this.props.note.id}/edit`}
      ><i className="fa fa-pencil-square-o" aria-hidden="true"/>
      </Link>
    );
  }

}
