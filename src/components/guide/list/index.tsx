import * as React from "react";
import "./style.scss";

import { Link } from "react-router";
import guideStore from "../store";
import { IGuide } from "../guides";

export default class GuideList extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div id="guide-list">
        <ul className="guide-list">
          {this.list(guideStore.guides)}
        </ul>
      </div>
    );
  }

  private list = (guides: Array<IGuide>): Array<JSX.Element> => {
    return guides.map( (guide, i) => {
      return (
        <li key={i}>
          <p>{guide.title}</p>
          <p>{guide.description}</p>
          {guide.resource.title.length === 0
            ? <Link to={`/guide/${guide.id}/resource/add`}>Add Resource</Link>
            : <Link to={`/guide/${guide.id}/resource`}>{guide.resource.title}</Link>
          }
          <Link to={`/guide/edit/${guide.id}`}>Edit Guide: {guide.id}</Link>
          <Link to={`/guide/${guide.id}`}>View Guide: {guide.id}</Link>
        </li>
      );
    });
  }
}
