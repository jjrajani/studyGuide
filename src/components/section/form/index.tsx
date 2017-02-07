import * as React from "react";
import "./style.scss";
import { ISection } from "../section";
import sectionStore from "../store";
// import NewResourceChapterForm from "../../chapter/form/new-resource";

export interface SectionFormProps {
  params: any;
  change?: Function;
}

export interface SectionFormState {
  section: ISection;
}

export default class SectionForm extends React.Component<SectionFormProps, SectionFormState> {

  constructor (props: SectionFormProps) {
    super(props);
    let params = this.props.params;
    this.state = {section: sectionStore.getSection(params.id, params.chapterId, params.sectionId)};
  }

  render() {
    let section = this.state.section;
    return (
      <div id="new-section" className="form-wrapper">
        <div className="header">
          <h3>New Section</h3>
        </div>
        <div className="section form">
          <div className="text-input">
            <label htmlFor="title">
              Title:
              <input
                type="text"
                name="title"
                value={section.title}
                placeholder="Section Title"
                onChange={this.updateSection}
              />
            </label>
          </div>
          <div className="text-input">
            <label htmlFor="description">
              Description:
              <textarea
                name="description"
                value={section.description}
                placeholder="Section Description"
                onChange={this.updateSection}
              />
            </label>
          </div>
        </div>
        <button className="create-section submit" onClick={this.createSection}>Create Section</button>
      </div>
    );
  }

  private updateSection = (e: any) => {
    let section = this.state.section;
    section[e.target.name] = e.target.value;
    this.setState({section: section});
  }

  private createSection = () => {
    if (this.valid()) {
      sectionStore.createSection(this.state.section, this.props.params.id, this.props.params.chapterId);
    } else {
      console.log("title is required", this.state.section);
    }
  }

  private valid = (): boolean => {
    return (this.state.section.title.length > 0);
  }

}
