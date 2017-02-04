import * as React from "react";
import "./style.scss";
import { IGuide } from "../../../guides";
import { Link } from "react-router";

export interface IResourceProps {
  guide: IGuide;
}

export interface IResourceState {

}

export default class Resource extends React.Component<IResourceProps, IResourceState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor (props: IResourceProps) {
    super(props);
  }

  render() {
    let guide = this.props.guide;
    return (
      <div className="resource">
      {guide.resource.title.length === 0
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
          </div>}
      </div>
    );
  }
}
