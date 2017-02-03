import * as React from "react";
import "./style.scss";

import newGuideStore from "./store";

export default class NewGuide extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    newGuideStore.init();
    return (
      <div id="new-guide">
        <h1>
          Gonna be a new guide
        </h1>
      </div>
    );
  }
}
