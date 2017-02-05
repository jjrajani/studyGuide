import * as React from "react";
import "./style.scss";

export interface NoteProps {

}

export interface NoteState {

}

export default class Note extends React.Component<NoteProps, NoteState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props: NoteProps) {
    super(props);
  }

  render() {
    return (
      <div id="note">
        note
      </div>
    );
  }
}
