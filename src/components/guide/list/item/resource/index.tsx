import * as React from "react";
import "./style.scss";
import { IResource } from "../../../../resource/resource";
import { Link } from "react-router";
import ChapterList from "../chapter-list";

export interface IResourceProps {
  guideId: number;
  resource: IResource;
}

export interface IResourceState {
  showChapters: boolean
}

export default class Resource extends React.Component<IResourceProps, IResourceState> {

  constructor (props: IResourceProps) {
    super(props);
    this.state = {showChapters: false};
  }

  render() {
    return (
      <div className="resource">
      {this.props.resource.title.length === 0 ? this.addResource() : this.renderResource() }
      { this.chapters() }
      </div>
    );
  }

  private addResource = () => {
    return (
      <Link
          className="add-resource"
          to={`/guide/${this.props.guideId}/resource/add`}
        >Add Resource
        </Link>
    );
  }

  private renderResource = () => {
    let resource = this.props.resource;
    return (
      <div className="resource-specs">
          <Link
            className="link"
            to={`/guide/${this.props.guideId}/resource`}
          >{resource.title}:
          </Link>
          <p className="description">
            {resource.description}
          </p>
          { resource.chapters.length === 0
            ? this.addChapter()
            : this.chapterToggle()
          }
        </div>
    );
  }

  private chapters = () => {
    return this.state.showChapters ? <ChapterList chapters={this.props.resource.chapters}/> : null;
  }

  private addChapter = () => {
    return (
      <Link
          className="add-chapter"
          to={`/guide/${this.props.guideId}/resource/chapter/add`}
        >Add Chapter
        </Link>
    );
  }

  private chapterToggle = () => {
    return this.state.showChapters ? this.closeChapters() : this.openChapters();
  }

  private openChapters = () => {
    return (
      <p
        className="chapter-toggle"
        onClick={this.toggleDescription}
      >Preview Chapters
        <i
          className="fa fa-arrow-circle-down"
          aria-hidden="true">
        </i>
      </p>
    )
  }

  private closeChapters = () => {
    return (
      <p
        className="chapter-toggle"
        onClick={this.toggleDescription}
      >Hide Chapters
        <i
          className="fa fa-arrow-circle-up"
          aria-hidden="true">
        </i>
      </p>
    )
  }

  private toggleDescription = () => {
    this.setState({showChapters: !this.state.showChapters});
  }
}
