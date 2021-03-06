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
          <div className="guide header">
            {this.guideSpecs(guide)}
            {this.description(guide.description)}
            {this.editGuide(guide.id)}
          </div>
          <Resource guideId={guide.id} resource={guide.resource}/>
        </li>
    );
  }

  private guideSpecs = (guide: IGuide) => {
    return (
      <div className="link">
        {this.editLink()}
        {this.descriptionToggle()}
      </div>
    );
  }

  private editLink = () => {
    return (
      <Link
        className="guide link"
        to={`guide/${this.props.guide.id}`}
      >{this.props.guide.title}
      </Link>
    );
  }

  private descriptionToggle = () => {
    let arrowDirection = this.state.showDescription ? "right active" : "left";
    return (
      <i
        onClick={this.toggleDescription}
        className={"fa fa-arrow-circle-" + arrowDirection + " toggle"}
        aria-hidden="true"
      />
    );
  }
  private toggleDescription = () => { this.setState({showDescription: !this.state.showDescription}); }

  private description = (description: string) => {
    let className = this.state.showDescription ? "description" : "hidden";
    return <p className={className}>{description}</p>;
  }

  private editGuide = (id: number) => {
    return (
      <Link
        className="link edit"
        to={`guide/edit/${id}`}
      ><i className="fa fa-pencil-square-o" aria-hidden="true"/>
      </Link>
    );
  }
}
