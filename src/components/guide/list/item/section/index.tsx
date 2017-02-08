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
  showNotes: boolean;
  listSize: number;
}

export default class Section extends React.Component<SectionProps, SectionState> {

  constructor (props: SectionProps) {
    super(props);
    this.state = {showNotes: false, listSize: 3};
  }

  render() {
    let section = this.props.section;
    return (
      <div className="section list-item">
        <div className="section header">
          <div className="sub-header">
            <Link
              className="link"
              to={`studyGuide/guide/${this.props.guideId}/resource/chapter/${this.props.chapterId}/section/${section.id}`}
            >{section.title}:
            </Link>
            <p className="description">
              {section.description}
            </p>
          </div>
          { section.notes.length === 0
            ? this.addNote()
            : this.toggles()
          }
        </div>
        {this.state.showNotes ? this.renderNotes() : null}
      </div>
    );
  }

  private renderNotes = () => {
    return (
      <div className="note list">
        {this.props.section.notes.map( (note, i) => {
          return (<Note key={i} note={note} guideId={this.props.guideId} chapterId={this.props.chapterId} sectionId={this.props.section.id}/>)
        }).slice(0, this.state.listSize)}
        <ListExtender
          renderedListSize={this.state.listSize}
          listLength={this.props.section.notes.length}
          setListSize={this.setListSize}
        />
      </div>
    )
  }

  private addNote = () => {
    return (
      <div className="add note">
        <Link
          className="add link"
          to={`studyGuide/guide/${this.props.guideId}/resource/chapter/${this.props.chapterId}/section/${this.props.section.id}/note/add`}
        ><i className="fa fa-plus-circle" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }

  private toggles = () => {
    return this.state.showNotes
           && this.props.section.notes.length > 0
           ? this.closeNotes()
           : this.openNotes();
  }

  private openNotes = () => {
    return (
      <div className="toggles">
        <p
          className="notes toggle"
          onClick={this.toggleNotes}
        >Preview Notes
          <i
            className="fa fa-arrow-circle-down"
            aria-hidden="true"
          />
        </p>
      </div>
    );
  }

  private closeNotes = () => {
    return (
      <div className="toggles">
        {this.state.showNotes ? this.addNote() : null}
        <p
          className="notes toggle"
          onClick={this.toggleNotes}
        >Hide Notes
          <i
            className="fa fa-arrow-circle-up"
            aria-hidden="true"
          />
        </p>
      </div>
    );
  }

  private toggleNotes = () => {
    console.log('sections', this.props.section.notes);
    this.setState({showNotes: !this.state.showNotes});
  }

  private setListSize = (listSize: number) => {
    this.setState({listSize: listSize});
  }

}
