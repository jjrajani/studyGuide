import * as React from "react";
// import "./style.scss";
import { ISection } from "../../../../section/section";
import { Link } from "react-router";
import Note from "../note";
import ListExtender from "../extender";

export interface SectionProps {
  guideId: number;
  chapterId: number;
  section: ISection;
}

export interface SectionState {
  sectionOpen: boolean;
  showNotes: boolean;
  listSize: number;
}

export default class Section extends React.Component<SectionProps, SectionState> {

  constructor (props: SectionProps) {
    super(props);
    this.state = {sectionOpen: false, showNotes: false, listSize: 3};
  }

  render() {
    let className = this.state.sectionOpen ? "open section header" : " closed section header";
    return (
      <div className="section list-item">
        <div className={className}>
          <div className="section sub-header">
            {this.sectionLink()}
            {this.sectionDescription()}
            {this.sectionToggle()}
          </div>
          {this.addNote()}
        </div>
        {this.notes()}
      </div>
    );
  }

  private sectionLink = () => {
    return (
      <Link
        className="link"
        to={`guide/${this.props.guideId}/resource/section/:id`}
      >{this.props.section.title}:
      </Link>
    );
  }

  private sectionDescription = () => {
    let className = this.state.sectionOpen
    ? "open description"
    : "closed description";
    return (
      <p className={className}>
        {this.props.section.description}
      </p>
    );
  }

  private sectionToggle = () => {
    let arrowDirection = this.state.sectionOpen ? "left": "right";
    if (this.props.section.notes.length > 0) {
      return (
        <i
          onClick={this.toggleSection}
          className={"fa fa-arrow-circle-" + arrowDirection}
          aria-hidden="true"
        />
      );
    } else {
      return null
    }
  }
  private toggleSection = () => { this.setState({sectionOpen: !this.state.sectionOpen}) }

  private addNote = () => {
    return (
      <div className="add">
        <Link
          className="add link"
          to={`guide/${this.props.guideId}/resource/chapter/${this.props.chapterId}/section/${this.props.section.id}/note/add`}
        ><i className="fa fa-plus-circle" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }

  private notes = () => {
    let className = this.state.sectionOpen
    ? "open note list"
    : "closed note list";
    return (
      <div className={className}>
        {this.props.section.notes.map( (note, i) => {
          return (<Note key={i} note={note} guideId={this.props.guideId} chapterId={this.props.chapterId} sectionId={this.props.section.id}/>)
        }).slice(0, this.state.listSize)}
        {this.listExtender()}
      </div>
    );
  }

  private listExtender = () => {
    return (
      <ListExtender
        renderedListSize={this.state.listSize}
        listLength={this.props.section.notes.length}
        setListSize={this.setListSize}
      />
    );
  }
  private setListSize = (listSize: number) => { this.setState({listSize: listSize}); }
}
