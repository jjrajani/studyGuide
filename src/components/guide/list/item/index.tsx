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
    this.state = { showDescription: true };
  }

  render() {
    let guide = this.props.guide;
    return (
        <li className="guide list-item">
          {this.build(guide)}
          <Resource guideId={guide.id} resource={guide.resource}/>
        </li>
    );
  }
  private build = (guide: IGuide) => {
    return (
      <div className="guide header">
        {this.guideSpecs(guide)}
        {this.descriptionToggle(guide.description)}
        {this.editGuide(guide.id)}
      </div>
    );
  }

  private guideSpecs = (guide: IGuide) => {
    return (
      <div className="link">
        <Link
          className="guide link"
          to={`studyGuide/guide/${this.props.guide.id}`}
        >{guide.title}
        </Link>
        {this.state.showDescription ? this.hideDesciption() : this.showDescription()}
      </div>
    );
  }

  private showDescription = () => {
    return (
      <i
        onClick={this.toggleDescription}
        className="fa fa-arrow-circle-right toggle"
        aria-hidden="true"
      />
    );
  }
  private hideDesciption = () => {
    return (
      <i
        onClick={this.toggleDescription}
        className="fa fa-arrow-circle-left toggle active"
        aria-hidden="true"
      />
    );
  }

  private toggleDescription = () => {
    this.setState({showDescription: !this.state.showDescription});
  }

  private descriptionToggle = (description: string) => {
    return (
      <p
        className={this.state.showDescription ? "description" : "hidden"}
      >{description}
      </p>
    );
  }

  private editGuide = (id: number) => {
    return (
      <Link
        className="link edit"
        to={`studyGuide/guide/edit/${id}`}
      ><i className="fa fa-pencil-square-o" aria-hidden="true"/>
      </Link>
    );
  }
}
