import * as React from "react";
import "./style.scss";

import { Link } from "react-router";
import Resource from "./resource";
import { IGuide } from "../../guides";

export interface GuideListItemProps {
  guide: IGuide;
}

export interface GuideListItemState {
  showDescription: boolean;
}
export default class GuideListItem extends React.Component<GuideListItemProps, GuideListItemState> {

  constructor (props: GuideListItemProps) {
    super(props);
    this.state = { showDescription: false };
  }

  render() {
    let guide = this.props.guide;
    return (
        <li className="guide-list-item">
          {this.build(guide)}
          <Resource guide={guide}/>
        </li>
    );
  }
  private build = (guide: IGuide) => {
    return (
      <div className="title">
        {this.guideSpecs(guide)}
        {this.descriptionToggle(guide.description)}
        {this.editGuide(guide.id)}
      </div>
    );
  }

  private guideSpecs = (guide: IGuide) => {
    return (
      <div className="text">
        <Link
          className="guide-link"
          to={`/guide/${guide.id}`}
        >{guide.title}
        </Link>
        { this.state.showDescription ? this.hideDesciption() : this.showDescription() }
      </div>
    );
  }

  private showDescription = () => {
    return (
      <i
        onClick={this.toggleDescription}
        className="fa fa-arrow-circle-o-right toggle-descript"
        aria-hidden="true">
      </i>
    );
  }
  private hideDesciption = () => {
    return (
      <i
        onClick={this.toggleDescription}
        className="fa fa-arrow-circle-o-left toggle-descript active"
        aria-hidden="true">
      </i>
    );
  }

  private toggleDescription = () => {
    this.setState({showDescription: !this.state.showDescription});
  }

  private descriptionToggle = (description: string) => {
    return (
      <p className={ this.state.showDescription
                     ? "description" : "hidden" }
      >{description}</p>
    );
  }

  private editGuide = (id: number) => {
    return (
      <Link
        className="edit-guide"
        to={`/guide/edit/${id}`}
      ><i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </Link>
    );
  }
}
