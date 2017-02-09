import * as React from "react";
import "./style.scss";
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
      <div className="note list-item">
        {this.header()}
        <p className="text">{note.text}</p>
      </div>
    );
  }

  private header = () => {
    return (
      <div className="open note header">
        {this.editLink()}
        {this.edit()}
      </div>
    );
  }

  private editLink = () => {
    return (
      <Link
        className="link page-number"
        to={`guide/${this.props.guideId}/resource/chapter/${this.props.chapterId}/section${this.props.sectionId}/note/${this.props.note.id}`}
      >pg.{this.props.note.pageNumber}
      </Link>
    );
  }

  private edit = () => {
    return (
      <Link
        className="link edit"
        to={`guide/${this.props.guideId}/resource/section/${this.props.sectionId}/note/${this.props.note.id}/edit`}
      ><i className="fa fa-pencil-square-o" aria-hidden="true"/>
      </Link>
    );
  }

}
