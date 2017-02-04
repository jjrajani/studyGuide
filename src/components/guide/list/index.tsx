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
        <li className="guide" key={i}>
          {this.guideTitle(guide)}
          {this.guideResource(guide)}
          <Link
            className="edit-guide"
            to={`/guide/edit/${guide.id}`}
          >Edit Guide: {guide.id}
          </Link>
        </li>
      );
    });
  }

  private guideTitle = (guide: IGuide) => {
    return (
      <div className="title">
        <span className="label-tab">Guide:</span>
        <div className="align-bottom">
          <Link
            className="link"
            to={`/guide/${guide.id}`}
          >{guide.title}
          </Link>
        <p className="description">{guide.description}</p>
        </div>
      </div>
    );
  }

  private guideResource = (guide: IGuide) => {
    return guide.resource.title.length === 0
      ? <Link
          className="add-resource"
          to={`/guide/${guide.id}/resource/add`}
        >Add Resource
        </Link>
      : <div className="resource">
          <Link
            className="link"
            to={`/guide/${guide.id}/resource`}
          >{guide.resource.title}
          </Link>
          <p className="description">
            {guide.resource.description}
          </p>
        </div>
  }
}
