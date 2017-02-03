import * as React from "react";
import "./style.scss";

import guideStore, { Guide } from "../store";

export interface GuideFormProps {
  guide?: Guide;
}

export interface GuideFormState {
  guide: Guide;
}

export default class GuideForm extends React.Component<GuideFormProps, GuideFormState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor (props: GuideFormProps) {
    super(props);
    if (props.guide !== undefined) {
      console.log('editing guide', props.guide)
      this.state = {guide: props.guide};
    } else {
      this.state = {guide: new Guide()};
      console.log('new guide', this.state.guide)
    }
  }

  render() {
    guideStore.init();
    return (
      <div id="new-guide">
        <h1>
          Gonna be a new guide
        </h1>
      </div>
    );
  }
}
