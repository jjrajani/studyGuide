import * as React from "react";
import "./style.scss";

import GuideList from "./list";

export default class Guide extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div id="guide">
        <GuideList />
      </div>
    );
  }
}
