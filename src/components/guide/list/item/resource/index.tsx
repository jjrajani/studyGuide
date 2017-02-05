import * as React from "react";
// import "./style.scss";
import { IResource } from "../../../../resource/resource";
import { Link } from "react-router";
import Chapter from "../chapter";
import ListExtender from "../extender";

export interface ResourceProps {
  guideId: number;
  resource: IResource;
}

export interface ResourceState {
  showChapters: boolean;
  listSize: number;
}

export default class Resource extends React.Component<ResourceProps, ResourceState> {

  constructor (props: ResourceProps) {
    super(props);
    this.state = {showChapters: false, listSize: 3};
  }

  render() {
    return (
      <div className="resource item">
      {this.props.resource.title.length === 0 ? this.addResource() : this.renderResource()}
      {this.chapters(this.state.listSize)}
      </div>
    );
  }

  private addResource = () => {
    return (
      <div className="add resource">
        <Link
          className="add link"
          to={`/guide/${this.props.guideId}/resource/add`}
        >Add Resource
        </Link>
      </div>
    );
  }

  private renderResource = () => {
    let resource = this.props.resource;
    return (
      <div className="resource header">
        <div className="resource sub-header">
          <Link
            className="link"
            to={`/guide/${this.props.guideId}/resource`}
          >{resource.title}:
          </Link>
          <p className="description">
            {resource.description}
          </p>
        </div>
        { resource.chapters.length === 0
          ? this.addChapter()
          : this.chapterToggle()
        }
      </div>
    );
  }

  private chapters = (listSize: number) => {
    if (this.state.showChapters) {
      return  (
        <div className="chapter list">
          {this.props.resource.chapters.map( (chapter, i) => {
            return (<Chapter key={i} chapter={chapter} guideId={this.props.guideId}/>)
          }).slice(0,(listSize))}
          <div className="show-more">
          <ListExtender
            renderedListSize={this.state.listSize}
            listLength={this.props.resource.chapters.length}
            setListSize={this.setListSize}
          />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  private addChapter = () => {
    return (
      <div className="add chapter">
        <Link
          className="add link"
          to={`/guide/${this.props.guideId}/resource/chapter/add`}
        >Add Chapter
        </Link>
      </div>
    );
  }

  private chapterToggle = () => {
    return this.state.showChapters ? this.closeChapters() : this.openChapters();
  }

  private openChapters = () => {
    return (
      <div className="chapter toggles">
        <p
          className="chapter toggle"
          onClick={this.toggleDescription}
        >Preview Chapters
          <i
            className="fa fa-arrow-circle-down"
            aria-hidden="true"
          />
        </p>
      </div>
    );
  }

  private closeChapters = () => {
    return (
      <div className="toggles">
        <p
          className="chapter toggle"
          onClick={this.toggleDescription}
        >Hide Chapters
          <i
            className="fa fa-arrow-circle-up"
            aria-hidden="true"
          />
        </p>
      </div>
    );
  }

  private setListSize = (listSize: number) => {
    this.setState({showChapters: this.state.showChapters, listSize: listSize});
  }

  private toggleDescription = () => {
    this.setState({showChapters: !this.state.showChapters, listSize: this.state.listSize});
  }
}
