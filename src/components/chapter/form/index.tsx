import * as React from "react";
import "./style.scss";

export interface ChapterFormProps {

}

export interface ChapterFormState {

}

export default class ChapterForm extends React.Component<ChapterFormProps, ChapterFormState> {
  constructor(props: ChapterFormProps) {
    super(props);
  }

  render() {
    return (
      <div id="chapter-form">
        <h1>
          chapter form
        </h1>
      </div>
    );
  }
}
