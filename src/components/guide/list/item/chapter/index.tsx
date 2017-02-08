import * as React from "react";
// import "./style.scss";
import { IChapter } from "../../../../chapter/chapter";
import { Link } from "react-router";
import Section from "../section";
import ListExtender from "../extender";

export interface ChapterProps {
  guideId: number;
  chapter: IChapter;
}

export interface ChapterState {
  showSections: boolean;
  listSize: number;
}

export default class Chapter extends React.Component<ChapterProps, ChapterState> {

  constructor (props: ChapterProps) {
    super(props);
    this.state = {showSections: false, listSize: 3};
  }

  render() {
    let chapter = this.props.chapter;
    return (
      <div className="chapter list-item">
        <div className="chapter header">
          <div className="chapter sub-header">
            <Link
              className="link"
              to={`/guide/${this.props.guideId}/resource/chapter/:id`}
            >{chapter.title}:
            </Link>
            <p className="description">
              {chapter.description}
            </p>
          </div>
          { chapter.sections.length === 0
            ? this.addSection()
            : this.toggles()
          }
        </div>
        {this.state.showSections ? this.renderSections() : null}
      </div>
    );
  }

  private renderSections = () => {
    return (
      <div className="section list">
        {this.props.chapter.sections.map( (section, i) => {
          return (<Section key={i} section={section} guideId={this.props.guideId} chapterId={this.props.chapter.id}/>)
        }).slice(0, this.state.listSize)}
        <ListExtender
          renderedListSize={this.state.listSize}
          listLength={this.props.chapter.sections.length}
          setListSize={this.setListSize}
        />
      </div>
    )
  }

  private addSection = () => {
    console.log('chapter id to add section', this.props.chapter.id)
    return (
      <div className="add">
        <Link
          className="add link"
          to={`/guide/${this.props.guideId}/resource/chapter/${this.props.chapter.id}/section/add`}
        ><i className="fa fa-plus-circle" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }

  private toggles = () => {
    return this.state.showSections
           && this.props.chapter.sections.length > 0
           ? this.closeSections()
           : this.openSections();
  }

  private setListSize = (listSize: number) => {
    this.setState({listSize: listSize});
  }

  private openSections = () => {
    return (
      <div className="toggles">
        <p
          className="sections toggle"
          onClick={this.toggleSections}
        >Preview Sections
          <i
            className="fa fa-arrow-circle-down"
            aria-hidden="true"
          />
        </p>
      </div>
    );
  }

  private closeSections = () => {
    return (
      <div className="toggles">
        {this.addSection()}
        <p
          className="sections toggle"
          onClick={this.toggleSections}
        >Hide Sections
          <i
            className="fa fa-arrow-circle-up"
            aria-hidden="true"
          />
        </p>
      </div>
    );
  }

  private toggleSections = () => {
    this.setState({showSections: !this.state.showSections});
  }

}
