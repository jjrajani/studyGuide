import * as React from "react";
import "./style.scss";

export interface NoteFormProps {

}

export interface NoteFormState {

}

export default class NoteForm extends React.Component<NoteFormProps, NoteFormState> {
  constructor(props: NoteFormProps) {
    super(props);
  }

  render() {
    return (
      <div className="note form">
        <h1>
          note form
        </h1>
      </div>
    );
  }
}
