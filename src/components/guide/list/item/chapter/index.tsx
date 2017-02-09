import * as React from "react";
import "./style.scss";
import { IChapter } from "../../../../chapter/chapter";
import { Link } from "react-router";
import Section from "../section";
import ListExtender from "../extender";

export interface ChapterProps {
  guideId: number;
  chapter: IChapter;
}

export interface ChapterState {
  chapterOpen: boolean;
  listSize: number;
}

export default class Chapter extends React.Component<ChapterProps, ChapterState> {

  constructor (props: ChapterProps) {
    super(props);
    this.state = {chapterOpen: false, listSize: 3};
  }

  render() {
    let className = this.state.chapterOpen ? "open chapter header" : " closed chapter header";
    return (
      <div className="chapter list-item">
        <div className={className}>
          <div className="chapter sub-header">
            {this.chapterLink()}
            {this.chapterDescription()}
            {this.chapterToggle()}
          </div>
          {this.addSection()}
        </div>
        {this.sections()}
      </div>
    );
  }

  private chapterLink = () => {
    return (
      <Link
        className="link"
        to={`guide/${this.props.guideId}/resource/chapter/:id`}
      >{this.props.chapter.title}:
      </Link>
    );
  }

  private chapterDescription = () => {
    let className = this.state.chapterOpen
    ? "open description"
    : "closed description";
    return (
      <p className={className}>
        {this.props.chapter.description}
      </p>
    );
  }

  private chapterToggle = () => {
    let arrowDirection = this.state.chapterOpen ? "left": "right";
    if (this.props.chapter.sections.length > 0) {
      return (
        <i
          onClick={this.toggleChapter}
          className={"fa fa-arrow-circle-" + arrowDirection}
          aria-hidden="true"
        />
      );
    } else {
      return null
    }
  }
  private toggleChapter = () => { this.setState({chapterOpen: !this.state.chapterOpen}) }

  private addSection = () => {
    console.log('chapter id to add section', this.props.chapter.id)
    return (
      <div className="add">
        <Link
          className="add link"
          to={`guide/${this.props.guideId}/resource/chapter/${this.props.chapter.id}/section/add`}
        ><i className="fa fa-plus-circle" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }

  private sections = () => {
    let className = this.state.chapterOpen
    ? "open section list"
    : "closed section list";
    return (
      <div className={className}>
        {this.props.chapter.sections.map( (section, i) => {
          return (<Section key={i} section={section} guideId={this.props.guideId} chapterId={this.props.chapter.id}/>)
        }).slice(0, this.state.listSize)}
        {this.listExtender()}
      </div>
    );
  }

  private listExtender = () => {
    return (
      <ListExtender
        renderedListSize={this.state.listSize}
        listLength={this.props.chapter.sections.length}
        setListSize={this.setListSize}
      />
    );
  }
  private setListSize = (listSize: number) => { this.setState({listSize: listSize}); }

}
