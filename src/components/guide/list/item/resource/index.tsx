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
        ><i className="fa fa-plus-circle" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }

  private renderResource = () => {
    let resource = this.props.resource;
    return (
      <div className="resource header">
        <div className="resource sub-header">
          <p className="label">
            Resource:
          </p>
          <Link
            className="link"
            to={`/guide/${this.props.guideId}/resource`}
          >{resource.title}:
          </Link>
          <p className="description">
            {resource.description}
          </p>
        </div>
        {this.nav()}
      </div>
    );
  }

  private nav = () => {
    return (
      <div className="chapter toggles">
        {this.addChapter()}
        {this.chapterToggle()}
      </div>
    )
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
          to={`guide/${this.props.guideId}/resource/chapter/add`}
        ><i className="fa fa-plus-circle" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }

  private toggleChapters = () => {
    this.setState({showChapters: !this.state.showChapters});
    // return this.props.resource.chapters.length > 0 && this.state.showChapters
    // ? this.chapterToggle()
    // : null;
  }

  private chapterToggle = () => {
    return this.props.resource.chapters.length > 0
    ? (<p
        className="chapter toggle"
        onClick={this.toggleChapters}
      >{this.props.resource.chapters.length} Chapters
        <i
          className="fa fa-arrow-circle-down"
          aria-hidden="true"
        />
      </p>)
    : null;
  }

  // private closeChapters = () => {
  //   return (
  //     <div className="toggles">
  //       {this.addChapter()}
  //       <p
  //         className="chapter toggle"
  //         onClick={this.toggleChapters}
  //       >Hide Chapters
  //         <i
  //           className="fa fa-arrow-circle-up"
  //           aria-hidden="true"
  //         />
  //       </p>
  //     </div>
  //   );
  // }

  private setListSize = (listSize: number) => {
    this.setState({listSize: listSize});
  }

  // private toggleDescription = () => {
  //
  // }
}
