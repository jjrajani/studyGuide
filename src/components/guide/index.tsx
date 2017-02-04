import * as React from "react";
import "./style.scss";

import Nav from "../nav";
import { ILink } from "../nav/link";
import GuideList from "./list";

let links: Array<ILink> = [
  {
    text: "New Guide",
    link: "/guide/new",
  }
];

export default class Guide extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div id="guide">
        <Nav links={links} />
        <GuideList />
      </div>
    );
  }
}
