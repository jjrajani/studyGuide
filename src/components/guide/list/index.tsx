import * as React from "react";
import "./style.scss";

import { IGuide } from "../guides";
import guideStore from "../store";
import GuideListItem from "./item";

export interface GuideListProps {

}
export interface GuideListState {

}

export default class GuideList extends React.Component<GuideListProps, GuideListState> {

  constructor (props: GuideListProps) {
    super(props);

  }

  render() {
    return (
      <div id="guide" className="list">
        <div id="header">
          <h3>Guides</h3>
        </div>
        <ul className="guide list">
          {this.list(guideStore.guides)}
        </ul>
      </div>
    );
  }

  private list = (guides: Array<IGuide>): Array<JSX.Element> => {
    return guides.map( (guide, i) => {
      return <GuideListItem key={i} guide={guide}/>;
    });
  }

}
